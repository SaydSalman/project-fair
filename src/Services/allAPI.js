import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


// register Api 
export  const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
 }
//  login API
export  const loginAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
 }
//  addproject API
export  const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
 }
//  homeproject API
export  const getHomeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"","")
 }

//  get all projects API
export  const getAllProjectAPI = async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)
 }
//  get user projects API
export  const getUserProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
 }
//  get edit project API
export  const editProjectAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/project/edit/${id}`,reqBody,reqHeader)
 }
//  get delete project API
export  const deleteProjectAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/project/delete/${id}`,{},reqHeader)
 }
// edit user profile /user/edit
export const updateUserProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}
