import { userAxiosInstance } from "./axiosInstance";


export const seoList = async()=>{
    const data = await userAxiosInstance.get('/seoList')
    return data
}