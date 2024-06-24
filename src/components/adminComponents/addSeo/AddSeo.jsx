import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addSeo } from "../../../api/adminApi";
import "./AddSeo.css";

const AddSeo = () => {
  const inputRef = useRef();
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const [imagesError, setImagesError] = useState(null);

  const onChooseImg = () => {
    inputRef.current.click();
  };

  const formik = useFormik({
    initialValues: {
      seoName: "",
    },
    validationSchema: Yup.object({
      seoName: Yup.string().required("SEO Name is required"),
    }),
    onSubmit: async (values) => {
      try {
        if (image.length === 0) {
          setImagesError("Please select an image for the SEO.");
          return;
        }

        const formData = {
          seoName: values.seoName,
          image,
        };

        const res = await addSeo(formData);
        if (res?.status === 201) {
          navigate("/admin/dashboard");
        }
      } catch (error) {
        console.error(error.response?.data?.message);
      }
    },
  });

  const handleOnChange = (event) => {
    const files = Array.from(event.target.files);
    const isValid = files.every(
      (file) =>
        file.type.startsWith("image/jpeg") || file.type.startsWith("image/png")
    );
    if (isValid) {
      setImageToBase(files);
      setImagesError(null);
    } else {
      setImagesError("Invalid file type. Please select a valid image file.");
    }
    event.target.value = null;
  };

  const setImageToBase = (files) => {
    const imagesData = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        imagesData.push(reader.result);
        if (imagesData.length === files.length) {
          setImage(imagesData);
        }
      };
    });
  };

  const handleRemoveImage = (index) => {
    setImage((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="add-seo-container">
      <h2>Add SEO</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="seoName">SEO Name</label>
          <input
            className="form-control"
            id="seoName"
            name="seoName"
            type="text"
            value={formik.values.seoName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.seoName && formik.errors.seoName && (
            <p className="error">{formik.errors.seoName}</p>
          )}
        </div>

        <div className="image-upload-section">
          <button type="button" className="choose-button" onClick={onChooseImg}>
            Choose File
          </button>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            multiple
            ref={inputRef}
            onChange={handleOnChange}
            style={{ display: "none" }}
          />
          <span className="file-count">{image.length} file(s) selected</span>
          {image.length > 0 && (
            <div className="image-preview">
              {image.map((img, index) => (
                <div key={index} className="image-preview-item">
                  <img
                    src={img}
                    alt={`preview ${index}`}
                    className="preview-img"
                  />
                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          {imagesError && <p className="error">{imagesError}</p>}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSeo;
