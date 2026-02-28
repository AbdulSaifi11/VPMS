import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function validEmail(){
  const [valid,setValidation]=useState(false)
  const [email,validEmail]=useState("");
  let [Eerror,setEError]=useState("");
  let [phone,setPhone]=useState("");
  let [Perror,setPError]=useState("");
  function Validation(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const All=event.currentTarget;
    if(All.checkValidity()===false){
      event.stopPropagation();
      setValidation(true);
      return;
    }
    const emailFormat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Regex Format for email Validation
    if(!emailFormat.test(email)){
      setEError("Email is Invalid!");
      setValidation(true);
      return;
    }
    let phoneFormat=/^\d{10}$/
    if(!phoneFormat.test(phone))
    {
      setPError("invalid number!");
      setValidation(true);
      return;
    }
    setEError("");
    setPError("");
    setValidation(true);
    return;
  }
  return(
    <Form noValidate onSubmit={Validation} validated={valid}>
      <Form.Label name="email" >Email::</Form.Label>
      <Form.Control id="email" onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={email} isInvalid={!!Eerror} onChange={(e)=>{validEmail(e.target.value)}} type="text" placeholder="Enter Email." required/>
      <Form.Control.Feedback type="invalid">{Eerror}</Form.Control.Feedback>
      <Form.Label name="phone" >Phone::</Form.Label>
      <Form.Control id="phone" onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={phone} isInvalid={!!Perror} onChange={(e)=>{setPhone(e.target.value)}} type="tel" placeholder="Enter Phone." required/>
      <Form.Control.Feedback type="invalid">{Perror}</Form.Control.Feedback>
      <Button type="submit">Submit</Button>
    </Form>
  )
}