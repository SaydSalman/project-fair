import React, { createContext, useEffect, useState } from 'react'
export const tokenAuthenticationContext = createContext()
function TokenAuth({children}) {
    const [isAuthorized,setIsAuthorized] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAuthorized(true)
        }else{
            setIsAuthorized(false)
        }
    },[isAuthorized])
  return (
    <div>
      <tokenAuthenticationContext.Provider value={{isAuthorized,setIsAuthorized}}>{children}</tokenAuthenticationContext.Provider>
    </div>
  )
}

export default TokenAuth
