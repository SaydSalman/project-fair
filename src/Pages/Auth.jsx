import { useContext, useState } from "react"
import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from "../Services/allAPI";
import Spinner from 'react-bootstrap/Spinner';
import { tokenAuthenticationContext } from "../ContextAPI/TokenAuth";

function Auth({insideRegister}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthenticationContext)
  const navigate = useNavigate()
  const [spin,setSpin] = useState(false)
  const [userData,setUserData] = useState({
    username:"",email:"",password:""
  })
  const handleRegister =async (e)=>{
    e.preventDefault()
    console.log(userData);
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info("PLease fill the form completely")
    }else{
      // toast.success("Proceed to call api")
      try{
        const result = await registerAPI(userData)
      console.log(result);
      if(result.status===200){
        toast.success(`${result.data.username} has registered successfully`)
        setUserData({username:"",email:"",password:""})
        setTimeout(()=>{
          navigate('/login')
        },3000)
      }else{
        toast.warning(result.response.data)
      }
      }catch(err){
        console.log(err);
      }
      
    }
  }
 
  const handleLogin = async(e)=>{
    e.preventDefault()
    const {email,password} = userData
    if(!email || !password){
      toast.info("please fill the form completely")
    }else{
      try{
        const result = await loginAPI({email,password})
        console.log(result);
        if(result.status===200){
          setSpin(true)
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("userDetails",JSON.stringify(result.data.existingUser))
          setIsAuthorized(true)
          setTimeout(() => {
            setUserData({email:"",password:""})
            navigate('/')
            setSpin(false)
          }, 2000);
          
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  
  return (
    <div style={{width:'100%',height:'100vh'}} className="d-flex justify-content-center align-items-center">
      <div className="container w-75">
        <Link to={'/'}> <i className="fa-solid fa-arrow-left me-1"></i> Back to Home</Link>
        <div className="card shadow p-5 bg-success">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid w-100" src="https://media.istockphoto.com/id/1371541328/vector/multi-factor-authentication-concept-mfa-cybersecurity-solutions-3d-illustration.jpg?s=612x612&w=0&k=20&c=S6xx9k0fH23mx5kpPn1WJ8jMGuhqNYblH9AaVLhRvUE=" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-bolder text-light mt-2" style={{height:'70px'}}><i style={{height:'41px'}} className="fa-solid fa-paperclip mt-3"></i>Project Fair</h1>
              <h5 className="fw-bolder mt-2 pb-3 text-white">
                {insideRegister?'Sign Up to Your Account':"Sign in to Your Account"}
              </h5>
              <Form className="w-100">
              {insideRegister&&(
                <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Control type="text" placeholder="Enter Username" onChange={e=>setUserData({...userData,username:e.target.value})} value={userData.username} />              </Form.Group>
              )}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" onChange={e=>setUserData({...userData,email:e.target.value})} value={userData.email} />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" onChange={e=>setUserData({...userData,password:e.target.value})} value={userData.password} />
      </Form.Group>
      {
        insideRegister?
        <div>
          <button onClick={handleRegister} className="btn btn-light mb-2">Register</button>
          <p className="text-white fw-bolder">Already Have an Account ? Click here to <Link to={"/login"}>Login</Link></p>
        </div>:
        <div>
        <button onClick={handleLogin} className="btn btn-light mb-2">Login {spin&&<Spinner animation="border" variant="success" />}</button>
          <p className="text-white fw-bolder">New User ? Click here to <Link to={"/register"}>Register</Link></p>
        </div>
      }
      
      
    </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} theme="colored"/>
    </div>
  )
}

export default Auth
