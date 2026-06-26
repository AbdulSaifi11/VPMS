import '/src/customerPanel/about_contact_career.css';
import {Card,Container,Image,Button,Form,Col,Row} from 'react-bootstrap';
import {Link,useNavigate} from 'react-router-dom';
import {useRef,useState} from 'react';
import Road from '/src/assets/Road_PNG.png';
import  Parking from '/src/assets/Parking_sign.png';
import contact_back from '/src/assets/contact_bg.jpg';
import career_back from '/src/assets/career_bg.jpg';
import {RiTwitterXFill,RiInstagramLine,RiLinkedinBoxFill  ,RiFacebookBoxFill,RiCopyrightLine} from '@remixicon/react'
import 'react-bootstrap';
function AboutC(){
const refAbout=useRef<HTMLDivElement|null>(null);
let gotoAbout=()=>{
    refAbout.current?.scrollIntoView({behavior:"smooth"});
}
const refCareer=useRef<HTMLDivElement|null>(null);
let gotoCareer=()=>{
    refCareer.current?.scrollIntoView({behavior:"smooth"});
}
const refContact=useRef<HTMLDivElement|null>(null);
let gotoContact=()=>{
    refContact.current?.scrollIntoView({behavior:"smooth"});
}
//validation form
   const navigate=useNavigate();
    const [data,validateData]=useState(false)
    const[emailD,ValidateEmail]=useState("");
    const[emailError,setError]=useState("");
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
    setError("")
    validateData(true);
    navigate("/choose");
}
return(<>
    <Container fluid id="containerA">
        <section id="about" ref={refAbout}> 
            <p className='fs-2 fw-bold aboutHead'>ABOUT US</p>
            <p id="aboutContent">We are dedicated to simplifying and modernizing the parking experience through our <span className="text-warning">Valet Parking Management System</span>. Our goal is to provide a smart, efficient, and user-friendly solution that helps manage vehicle parking seamlessly.
                This system is designed to reduce manual effort, minimize waiting time, and enhance overall customer satisfaction. By integrating digital tracking and organized vehicle management, we aim to improve operational efficiency for parking staff and convenience for users.
                Our platform focuses on accuracy, security, and ease of use, ensuring that both customers and administrators can interact with the system effortlessly. We believe in using technology to solve real-world problems and create smarter urban solutions.
            <br /><br />
            <span className="fw-bold text-secondary">Our Mission:</span>
            To deliver a reliable and efficient parking management system that enhances user experience and optimizes parking operations.
            <br /><br />
            <span className="fw-bold text-secondary">Our Vision:</span>
            To become a leading smart parking solution provider by leveraging innovative technology.
            </p>
            <div id="road_parking">
            <Image src={Road} id="road_png" alt="roadPng"/>
            <Image src={Parking} id="parking_png"/></div>
        </section>
        <section id="career" ref={refCareer}>
            <div className="team" style={{backgroundImage:`url(${career_back})`}}>
                <h1 className=" heading fw-bold">Join Our Team</h1>
                <h6 className='text-info'>Build your future with us. Explore exciting career opportunities and grow in a creative and friendly environment.</h6>
                <Button className="my-5 bg-secondary">View Opening</Button>
            </div>
            <div className="positions d-flex justify-content-evenly">
                <Card id="card">
                    <Card.Header className="fw-bold">Frontend Developer</Card.Header>
                    <Card.Body>
                        <p>We want a passionate react developer with creation of responsive & clean UI</p>
                        <Button>Apply Now</Button>
                    </Card.Body>
                </Card>
                <Card id="card">
                    <Card.Header className="fw-bold">Java Developer</Card.Header>
                    <Card.Body>
                        <p> Candidate should know about core java development and spring or springboot framework for backend & any SQL database.</p>
                        <Button>Apply Now</Button>
                    </Card.Body>
                </Card>
                <Card id="card">
                    <Card.Header className="fw-bold">HR Intern</Card.Header>
                    <Card.Body>
                        <p>It is mandetory a graduated candidate with a good communication skills.</p>
                        <Button>Apply Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
        <section id="contact_Sec" ref={refContact} style={{backgroundImage:`url(${contact_back})`}}>
            <Form noValidate validated={data} onSubmit={Validate} className="w-100 d-flex flex-column gap-4 ">
                <h4 className="form_heading text-secondary">Connect with Us</h4>
                <Form.Group id='F_Group' as={Row}>
                <Form.Label as={Col} xs={1} sm={1} md={2} lg={2} className="label_contact text-light">Name-</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                <Col xs={7} sm={7} md={5} lg={5}><Form.Control type="text" onBlur={(e)=>{ e.target.value = e.target.value.trim();}} required placeholder="Enter Name.."  />
                <Form.Control.Feedback type="invalid" className="text-start">Enter Valid Name</Form.Control.Feedback></Col>
                </Form.Group>
                <Form.Group id='F_Group' as={Row}>
                <Form.Label as={Col} xs={1} sm={1} md={2} lg={2} className=" label_contact text-light">Email-</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                <Col xs={7} sm={7} md={5} lg={5}><Form.Control type="text" isInvalid={!!emailError} id="Email" placeholder="Enter Email.." onBlur={(e)=>{e.target.value=e.target.value.trim()}} value={emailD} onChange={(e)=>{ValidateEmail(e.target.value)}} required />
                <Form.Control.Feedback type="invalid" className="text-start">{emailError}</Form.Control.Feedback></Col>
                </Form.Group>
                <Form.Group id='F_Group' as={Row}>
                <Form.Label as={Col} xs={1} sm={1} md={2} lg={2} className=" label_contact text-light">Phone-</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                <Col xs={7} sm={7} md={5} lg={5}><Form.Control type="tel" pattern="[0-9]{10}" onBlur={(e)=>{ e.target.value = e.target.value.trim();}} required placeholder="Enter Mobile No.."  />
                <Form.Control.Feedback type="invalid" className="text-start">Enter Valid Number</Form.Control.Feedback></Col>
                </Form.Group>
                <Form.Group id='F_Group' as={Row}>
                <Form.Label as={Col} xs={1} sm={1} md={2} lg={2} className="label_contact text-light">Any Quiery-</Form.Label>&nbsp;&nbsp;&nbsp;&nbsp;
                <Col xs={7} sm={7} md={5} lg={5}><Form.Control as="textarea" rows={2} type="text" onBlur={(e)=>{ e.target.value = e.target.value.trim();}} placeholder="Enter Anything.."  /></Col>
                </Form.Group>
                <Col id="submit_butt"><Button className="w-25 bg-warning" type="submit">Submit</Button></Col>
            </Form>
        </section>
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
                            <Link to="/about" onClick={gotoCareer} className='item text-decoration-none text-secondary'>Career</Link>
                            <Link to="/support" className='item text-decoration-none text-secondary'>Support</Link>
                        </div>
                        <div className="headItem d-flex flex-column fw-bold">Company
                            <Link to="/login" className='item text-decoration-none text-secondary'>Home</Link>
                            <Link to="/about" onClick={gotoAbout} className='item text-decoration-none text-secondary'>About</Link>
                            <Link to="/about" onClick={gotoContact} className='item text-decoration-none text-secondary'>Contact</Link>
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
 </>)
}
export default AboutC;