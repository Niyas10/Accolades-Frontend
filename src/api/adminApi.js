import { adminAxiosInstance, userAxiosInstance } from "./axiosInstance";

export const adminVerifyLogin = async (loginData) => {
  const data = await adminAxiosInstance.post("/login", loginData);
  return data;
};

export const listSeo = async () => {
  const data = await adminAxiosInstance.get("/seoList");
  return data;
};

export const addSeo = async (formData) => {
  const data = await adminAxiosInstance.post("/addSeo", formData);
  return data;
};

export const editSeo = async (seoId) => {
  const data = await adminAxiosInstance.get(`/editSeo/${seoId}`);
  return data;
};

export const savedEditedSeo = async (formData) => {
  const data = await adminAxiosInstance.put(`/savedEdit/${formData.seoId}`, {
    ...formData,
  });
  return data;
};

export const deleteSeo = async (seoId)=>{
    const data = await adminAxiosInstance.delete(`/deleteSeo/${seoId}`)
    return data
}


export const listDescriptions = async () => {
    const data = await adminAxiosInstance.get('/descriptions');
    return data;
 
};

// Add a new description
export const addDescription = async (formData) => {
    const data= await adminAxiosInstance.post('/addDescription', formData);
    return data;
};

// Edit an existing description
export const editDescription = async (id, formData) => {
    const data = await adminAxiosInstance.put(`/editDescription/${id}`, formData);
    return data
};


