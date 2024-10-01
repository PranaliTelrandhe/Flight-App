import { useState } from 'react';
import {Form,FormGroup,FormLabel,FormControl,Container,Button,FormText} from 'react-bootstrap'
const SignUp= ({existingUser}) =>{
    const [user,setUser]=useState({
        username:"",
        password:"",
        confirmPassword:""
    })
    //event handler to handle sign up form submit event
    const submitForm = (e) =>{
        e.preventDefault();
        alert("Congrats!You have succesfully registered")
    }
    return(
        <Container className='container border border-dark p-3 mt-3 rounded w-50'>
            <h2 className='text-center'>Sign Up Form</h2>
      <Form onSubmit={submitForm}>
        <FormGroup className='mb-3'>
        <FormLabel>New Username</FormLabel>
        <FormControl value={user.username}  onChange={ e=>setUser( {...user,username:e.target.value} ) } required/>
        </FormGroup>
        <FormGroup className='mb-3'>
        <FormLabel>New Password</FormLabel>
        
        <FormControl type='text' value={user.password} onChange={ e=>setUser({...user,password:e.target.value } ) }required pattern='(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*]).{6,10}'/>
        <FormText>Password must be 6 to 10 characters long. it must contain at least one lowercase,one upper case alphabet, one digit and any one of the symbols such as !@#$%^&* </FormText>
        </FormGroup>
        <FormGroup className='mb-3'>
        <FormLabel>Confirm New Password</FormLabel>
        <FormControl type='password' value={user.confirmPassword} onChange={ e=>setUser({...user,confirmPassword:e.target.value } ) }required/>
        {user.password!==user.confirmPassword && <p style={{color:'red'}}>Sorry! password is not matched</p>}
        </FormGroup>
        <Container className='text-center'>
        <Button className='me-3' type='submit'>Sign up</Button>
        <Button className='' variant='secondary' type='reset'>Reset</Button>
        </Container>
      </Form>
      
      
       </Container>
    )
}
export default SignUp;