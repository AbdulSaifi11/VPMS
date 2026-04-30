import '/src/customerPanel/about_contact_career.css';
import {Container,Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useRef} from 'react';
import Road from '/src/assets/Road_PNG.png';
import  Parking from '/src/assets/Parking_sign.png';
import {RiTwitterXFill,RiInstagramLine,RiLinkedinBoxFill  ,RiFacebookBoxFill,RiCopyrightLine} from '@remixicon/react'
import 'react-bootstrap';
function AboutC(){
const refren=useRef<HTMLDivElement|null>(null);
let gotoAbout=()=>{
    refren.current?.scrollIntoView({behavior:"smooth"});
}
return(<>
    <Container fluid id="containerA">
        <section id="about" ref={refren}> 
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
        {/* <section id="career">
            <h5>Career</h5>
        </section> */}
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
                            <Link to="/Acc" onClick={gotoAbout} className='item text-decoration-none text-secondary'>About</Link>
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
 </>)
}
export default AboutC;