import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPageCSS.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Container,Form,Row,Col,Button,} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
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
        <Container  fluid style={{backgroundImage:"url('parking_back.jpg')"  ,backgroundSize:"cover",height:"135vh",width:"98.82vw"}} className=" m-0 p-0 min-vh-100">
            <Navbar expand="md" style={{width:"15vw",height:"85vh",backgroundColor:"RGBA(150,150,150,0.5)" ,left:"1vw",top:"7vh"}} className="Navbar position-absolute">
                <Navbar.Brand className="text-danger fw-bold" style={{position:"absolute",left:"1vw",top:"0vh"}}>VPMS <p style={{position:"absolute",top:"2vh",left:"0.3vw"}}>. .</p> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="humberger"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex flex-column ms-4 fw-bold" style={{}}>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Career</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div id="content" style={{width:"55vw",height:"80vh",position:"absolute",left:"30vw",top:"10vh", backgroundColor:"RGBA(255,255,255,0.4)"}} className="customCSS d-grid justify-content-center rounded-4 ">
                <Col lg={12} md={12}  ><h1 className="breakIt text-sm-1"style={{fontFamily:"generic",textAlign:"center",position:"relative",top:"3vh"}} ><span className="text-danger fst-italic">V</span>alet <span className="text-danger fst-italic">P</span>arking <span className="text-danger fst-italic">M</span>anagement <span className=" text-danger fst-italic">S</span>ystem</h1></Col><br></br>
                <p className="logintext text-center fst-italic" style={{position:"relative",bottom:"6vh"}} >Login  or create account!</p>
                <Form noValidate validated={data} onSubmit={Validate} className="d-flex flex-column gap-3" style={{position:"relative",bottom:"7vh"}}>
                    <Form.Group as={Row}>
                        <Form.Label className='label mx-5' column lg={1} md={1} sm={1} name="Email">Email: </Form.Label>
                        <Col lg={8} md={8} sm={6}><Form.Control className="input w-md-75"  type="text" isInvalid={!!emailError} id="Email" placeholder="Enter Email here!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={emailD} onChange={(e)=>{ValidateEmail(e.target.value)}} required/>
                        <Form.Control.Feedback  type="invalid">{emailError}</Form.Control.Feedback></Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column lg={1} md={1} sm={1} className=' label mx-5' name="password">Password:</Form.Label>
                        <Col lg={8} md={8} sm={6}><Form.Control className="input" type="password" id="password" isInvalid={!!passError} onChange={(e)=>validatePasssword(e.target.value)} placeholder="Enter Password!" onBlur={(e)=>{e.target.value=e.target.value.trim()}} required/>
                        <Form.Control.Feedback style={{position:"relative",top:"1vh"}} type="invalid">{passError}</Form.Control.Feedback> </Col>
                    </Form.Group>
                <Button  className="w-50 d-block mx-auto  bg-secondary text-dark  border border-0" type="submit">Login</Button>
                     </Form>
                     <p className=" newUser text-center fs-6 " >New User_<Link to="/login" className="text-decoration-none text-primary">CreateAccount</Link></p>
            </div>
            <footer  style={{backgroundColor:"RGB(255,255,250)",width:"95vw",top:"107vh"}} className="customCSS position-absolute h-25 rounded-3"></footer>
        </Container>
    )
}
export default Login;