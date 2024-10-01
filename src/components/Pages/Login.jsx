import { useState } from "react";

const Login =({newUser})=>{
const [user,setUser]=useState({
    username:"",
    password:''
})
// event handler to handle username change event
const handleUsernameChange=(e)=>{
setUser({...user,username:e.target.value});
}
//event handler to password change event
const handlePasswordChange= e =>setUser({...user,password:e.target.value});

//event handler to handle form submit event
const handleSubmit =(e)=>{
    e.preventDefault();
    alert ("Login Form is submitted");
}
    return(
<div className="container  border border-dark p-3 mt-3 rounded w-50">
<h2 className='text-center'>Login Form</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label className="form-label" htmlFor="un">Username</label>
        <input  className="form-control" id="un" type="text" placeholder="ENTER USERNAME" value={user.username} onChange={handleUsernameChange} required/>
        </div>
        <div className="mb-3">
            <label className="form-label" htmlFor="pw">Password</label>
            <input className="form-control" type="password"  id="pw" placeholder="ENTER PASSWORD" value={user.password} onChange={handlePasswordChange} required/>
        </div>
        <div className="text-center">
            <button  className="btn btn-primary me-3" type="submit">Login</button>
            
        </div>
      
    </form>
    
   
</div>

    )
}
export default Login;