import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPageCSS.css';
import {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import Car from '../assets/sport-car.png';
import {RiTwitterXFill,RiInstagramLine,RiLinkedinBoxFill  ,RiFacebookBoxFill,RiCopyrightLine} from '@remixicon/react'
function Login(){
    const navigate=useNavigate();
    const [data,validateData]=useState(false)
    const [password,validatePasssword]=useState("")
    const[emailD,ValidateEmail]=useState("");
    const[emailError,setError]=useState("");
    const [passError,setPError]=useState("");
   function Validate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let allD = event.currentTarget;

    if (allD.checkValidity() === false) {
        event.stopPropagation();
        validateData(true);
        return;
    }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(emailD)){
        setError("email is invalid!");
        validateData(true);
        return;
    }
    const pass=/^\d{6}$/
    if(!pass.test(password)){
        setPError("Enter correct password!");
        validateData(true);
        return;
    }
    setError("")
    validateData(true);
    navigate("/maincustomer");
}
    return(
        <>
  <Container fluid  style={{height:"100vh", width:"100vw"}} className="main m-0 p-0">
            <Navbar  expand="md" style={{width:"15vw",height:"85vh",left:"1vw",top:"7vh",backgroundColor:"rgba(238, 183, 107, 0.3)"}} className="Navbar ">
                
                <Navbar.Toggle className='position-fixed top-0' aria-controls="basic-navbar-nav" id="humberger"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="brand text-danger fw-bold" style={{position:"absolute",left:"1vw",top:"0vh"}}>VPMS <p style={{position:"absolute",top:"2vh",left:"0.3vw",color:"black"}}>. .</p></Navbar.Brand>
                    <Nav className="navlinks d-flex flex-column fw-bold" style={{width:"100%"}}>
                        <Nav.Link as={NavLink} to="/login"><Button>Home</Button></Nav.Link>
                        <Nav.Link><Button>About</Button></Nav.Link>
                        <Nav.Link><Button>Career</Button></Nav.Link>
                        <Nav.Link><Button>Contact</Button></Nav.Link>
                        <a href="#" style={{position:"relative",top:"12vh",left:"5vw",textDecoration:"none",color:"darkgray",width:"4vw",borderRadius:"5px"}}>Log in</a>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="content" style={{width:"55vw",height:"80vh",position:"absolute",left:"30vw",top:"10vh", backgroundColor:"RGBA(255,255,255,0.4)"}} className="customCSS z-index-0 d-grid justify-content-center rounded-4 ">
                <Col lg={12} md={12} sm={12} ><h1 className="breakIt text-sm-1"style={{fontFamily:"generic",textAlign:"center",position:"relative",top:"3vh"}} ><span className="text-danger fst-italic" >V</span>alet <span className="text-danger fst-italic">P</span>arking <span className="text-danger fst-italic">M</span>anagement <span className=" text-danger fst-italic">S</span>ystem</h1></Col><br></br>
                <p className="logintext text-center fst-italic" style={{position:"relative",bottom:"6vh"}} >Login  or create account!</p>
                <Form noValidate validated={data} onSubmit={Validate} className="d-flex flex-column gap-3" style={{position:"relative",bottom:"7vh"}}>
                    <Form.Group as={Row}>
                        <Form.Label className='label mx-5' column lg={1} md={1} sm={1} xs={1} xxl={1} name="Email">Email: </Form.Label>
                        <Col lg={8} md={8} sm={8} xs={6} xxl={9}><Form.Control className="input w-md-75"  type="text" isInvalid={!!emailError} id="Email" placeholder="Enter Email here!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={emailD} onChange={(e)=>{ValidateEmail(e.target.value)}} required/>
                        <Form.Control.Feedback className='feedback' type="invalid">{emailError}</Form.Control.Feedback></Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column lg={1} md={1} sm={1} xs={1} xxl={1} className=' label mx-5' name="password">Password:</Form.Label>
                        <Col lg={8} md={8} sm={8} xs={6} xxl={9}><Form.Control className="input" type="password" id="password" isInvalid={!!passError} onChange={(e)=>validatePasssword(e.target.value)} placeholder="Enter Password!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} required/>
                        <Form.Control.Feedback className='feedback'  type="invalid">{passError}</Form.Control.Feedback> </Col>
                    </Form.Group>
                <Button  className="w-50 d-block mx-auto text-dark  border border-0" style={{backgroundColor:"RGB(255,158,23)"}} type="submit" onClick={navigate as any}>Login</Button>
                     </Form>
                     <p className=" newUser text-center fs-6 " >New User_<Link to="/" className="text-decoration-none text-primary">CreateAccount</Link></p>
            </div>
            <img src={Car} className='car text-success  m-0 p-0' alt="car"/>
            </Container>
            <footer style={{backgroundColor:"rgba(240,240,240,0.6)", height:"auto",width:"100%"}}  className="footer position-relative rounded-3">
                <div className="footLogo "><h5 className="text-danger fw-bold">VPMS</h5><h5 className='dots fw-bold'>. .</h5></div>
                <p className="footTitle text-secondary">Find,Book and Park-<span>All in Just Few Clicks.</span></p>
                <div className="socialLink d-flex  gap-4 ">
                    <a href="https://www.twitter.com" className=" text-dark"><RiTwitterXFill className="socialIcon" /></a> 
                    <a href="https://www.Instagram.com"  className=" text-danger"><RiInstagramLine className="socialIcon"/></a>
                   <a href="https://www.Linkedin.com"  className=" text-primary"><RiLinkedinBoxFill  className="socialIcon"/></a>
                    <a href="https://www.Facebook.com"  className=" text-primary"><RiFacebookBoxFill className="socialIcon"/></a>
                </div>
                <div className="d-flex footLinks">
                    <div className="headItem d-flex flex-column fw-bold ">Products
                        <Link to="/features" className='item text-decoration-none text-secondary'>Features</Link>
                        <Link to="/price" className='item text-decoration-none text-secondary'>Pricing</Link>
                        <Link to="/service" className='item text-decoration-none text-secondary'>Services</Link>
                    </div>
                    <div className="headItem d-flex flex-column fw-bold">Resources
                        <Link to="/Acc" className='item text-decoration-none text-secondary'>Career</Link>
                        <Link to="/support" className='item text-decoration-none text-secondary'>Support</Link>
                    </div>
                    <div className="headItem d-flex flex-column fw-bold">Company
                        <Link to="/login" className='item text-decoration-none text-secondary'>Home</Link>
                        <Link to="/Acc" className='item text-decoration-none text-secondary'>About</Link>
                        <Link to="/Acc" className='item text-decoration-none text-secondary'>Contact</Link>
                    </div>                    
                </div>
                <div className="w-100 border border-light line" style={{position:"absolute",bottom:"55px"}}></div>
                <div className="footerBottom d-flex">
                    <RiCopyrightLine className="copyright text-secondary" style={{width:"15px",position:"relative",bottom:"0.5vh"}}/>
                    <p className=' text-secondary' style={{fontSize:"0.7rem"}}> &nbsp;&nbsp;2026 &nbsp;&nbsp;&nbsp; VPMS. All rights reserved</p>
                    <a id="terms" href="#" style={{color:"black",fontWeight:"normal",fontSize:"12px",position:"relative",left:"52vw"}}>Privacy Policy</a>
                     <a id="terms" href="#" style={{color:"black",fontWeight:"normal",fontSize:"12px",position:"relative",left:"55vw"}}>Terms of Services</a>
                </div>
            </footer>
          
          </>
    )
}
export default Login;