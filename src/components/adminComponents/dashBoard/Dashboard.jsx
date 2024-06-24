import React, { useEffect, useState } from "react";
import { listSeo, deleteSeo } from "../../../api/adminApi";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSeoList();
  }, []);

  const fetchSeoList = () => {
    listSeo()
      .then((res) => {
        setData(res?.data?.seos || []);
      })
      .catch((err) => {
        console.error("Error fetching SEO list:", err.message);
      });
  };

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddClick = () => {
    navigate("/admin/addSeo");
  };

  const handleDelete = (id) => {
    deleteSeo(id)
      .then(() => {
        fetchSeoList();
      })
      .catch((err) => {
        console.error("Error deleting SEO entry:", err.message);
      });
  };

  return (
    <div className="dashboard-seo-container">
      <div className="dashboard-seo-header">
        <button className="dashboard-seo-add-button" onClick={handleAddClick}>
          Add Seo
        </button>
      </div>

      <div className="dashboard-seo-table-container">
        <table className="dashboard-seo-table">
          <thead>
            <tr>
              <th className="dashboard-seo-id-column">ID</th>
              <th className="dashboard-seo-image-column">Image</th>
              <th className="dashboard-seo-name-column">Name</th>
              <th className="dashboard-seo-actions-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={item._id}>
                  <td className="dashboard-seo-id-column">
                    {firstIndex + index + 1}
                  </td>
                  <td className="dashboard-seo-image-column">
                    {item.images && item.images.length > 0 ? (
                      <img
                        src={item.images[0]}
                        alt={`Image ${item._id}`}
                        className="dashboard-seo-table-image"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="dashboard-seo-name-column">{item.seoName}</td>
                  <td className="dashboard-seo-actions-column">
                    <div className="dashboard-seo-actions-wrapper">
                      <button
                        onClick={() => navigate(`/admin/editSeo/${item._id}`)}
                        className="dashboard-seo-edit-button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="dashboard-seo-delete-button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="dashboard-seo-pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
