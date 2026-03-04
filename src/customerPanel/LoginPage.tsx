import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPageCSS.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import BgImage from '../assets/parking_back.jpg';
import Car from '../assets/sport-car.png';
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
    navigate("/customer");
}
    
   
    return(
  <Container fluid  style={{backgroundImage: `url(${BgImage})`,backgroundSize: "cover",backgroundPosition: "center",backgroundAttachment:"fixed", backgroundRepeat: "no-repeat", height: "135vh", width:"100vw"}} 
    className="m-0 p-0">
            <Navbar  expand="md" style={{width:"15vw",height:"85vh",backgroundColor:"RGBA(255,158,23,0.2)",left:"1vw",top:"7vh"}} className="Navbar">
                
                <Navbar.Toggle className='position-fixed top-0' aria-controls="basic-navbar-nav" id="humberger"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Brand className="text-danger fw-bold" style={{position:"absolute",left:"1vw",top:"0vh"}}>VPMS <p style={{position:"absolute",top:"2vh",left:"0.3vw",color:"black"}}>. .</p></Navbar.Brand>
                    <Nav className="navlinks d-flex flex-column fw-bold" style={{width:"100%"}}>
                        <Nav.Link><Button>Home</Button></Nav.Link>
                        <Nav.Link><Button>About</Button></Nav.Link>
                        <Nav.Link><Button>Career</Button></Nav.Link>
                        <Nav.Link><Button>Contact</Button></Nav.Link>
                        <Link to="/"  style={{position:"absolute",top:"65vh",left:"5vw",textDecoration:"none",color:"Gray",fontWeight:"bold",textShadow:"0px 2px 4px orange"}}>Log in</Link>
                    </Nav>
                    
                    {/* <RiParkingBoxFill  className="park text-secondary position-relative" /> */}
                </Navbar.Collapse>
            </Navbar>
            <div id="content" style={{width:"55vw",height:"80vh",position:"absolute",left:"30vw",top:"10vh", backgroundColor:"RGBA(255,255,255,0.4)"}} className="customCSS d-grid justify-content-center rounded-4 ">
                <Col lg={12} md={12} sm={12} ><h1 className="breakIt text-sm-1"style={{fontFamily:"generic",textAlign:"center",position:"relative",top:"3vh"}} ><span className="text-danger fst-italic" >V</span>alet <span className="text-danger fst-italic">P</span>arking <span className="text-danger fst-italic">M</span>anagement <span className=" text-danger fst-italic">S</span>ystem</h1></Col><br></br>
                <p className="logintext text-center fst-italic" style={{position:"relative",bottom:"6vh"}} >Login  or create account!</p>
                <Form noValidate validated={data} onSubmit={Validate} className="d-flex flex-column gap-3" style={{position:"relative",bottom:"7vh"}}>
                    <Form.Group as={Row}>
                        <Form.Label className='label mx-5' column lg={1} md={1} sm={1} xs={1} name="Email">Email: </Form.Label>
                        <Col lg={8} md={8} sm={6} xs={6}><Form.Control className="input w-md-75"  type="text" isInvalid={!!emailError} id="Email" placeholder="Enter Email here!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={emailD} onChange={(e)=>{ValidateEmail(e.target.value)}} required/>
                        <Form.Control.Feedback className='feedback' type="invalid">{emailError}</Form.Control.Feedback></Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column lg={1} md={1} sm={1} xs={1} className=' label mx-5' name="password">Password:</Form.Label>
                        <Col lg={8} md={8} sm={6} xs={6}><Form.Control className="input" type="password" id="password" isInvalid={!!passError} onChange={(e)=>validatePasssword(e.target.value)} placeholder="Enter Password!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} required/>
                        <Form.Control.Feedback className='feedback'  type="invalid">{passError}</Form.Control.Feedback> </Col>
                    </Form.Group>
                <Button  className="w-50 d-block mx-auto text-dark  border border-0" style={{backgroundColor:"RGB(255,158,23)"}} type="submit">Login</Button>
                     </Form>
                     <p className=" newUser text-center fs-6 " >New User_<Link to="/login" className="text-decoration-none text-primary">CreateAccount</Link></p>
            </div>
            <img src={Car} className='car text-success position-relative m-0 p-0' alt="car"/>
            <footer  style={{backgroundColor:"RGBA(256,256,256,0.8)",width:"90vw",bottom:"2vh"}} className="customCSS position-relative h-25 d-block mx-auto rounded-3">
                <div className="footLogo "><h5 className="text-danger fw-bold">VPMS</h5><h5 className='dots fw-bold'>. .</h5></div>
                <p className="title">Find,Book and Park--All in Just Few Clicks.</p>
            </footer>
          </Container>
    )
}
export default Login;