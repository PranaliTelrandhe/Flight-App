import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Register =()=>{
    const [isNewUser,setIsNewUser] = useState(false);
    const handleNewUser = () =>{
        setIsNewUser(true)
    }
    return(
    <div>
        { isNewUser ? <SignUp existingUser={()=>setIsNewUser(false)}/> : <Login newUser={handleNewUser}/> }
    </div>
    )
}
export default Register;