import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"


// register Api 
export  const registerAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
 }
export  const loginAPI = async (user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
 }