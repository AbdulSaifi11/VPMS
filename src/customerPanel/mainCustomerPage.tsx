import  './mainCustomerPage.css';
import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {RiUserFill} from '@remixicon/react';
import './LoginPageCSS.css';
function CustomerPage(){
    return(
        <>
        <Container fluid id="customer_container">
          <Navbar className="customer_navbar bg-secondary">
                <Navbar.Brand id="customer_brand" className="text-danger fw-bold" style={{position:"absolute",paddingLeft:"10px",left:"1vw",top:"0vh"}}>VPMS <p style={{position:"absolute",top:"2vh",left:"0.3vw",paddingLeft:"10px",color:"black"}}>. .</p></Navbar.Brand>
                <Nav className="Nav_customer d-flex justify-content-center w-100 gap-5">
                    <Nav.Link id='NavL' as={NavLink} to="/maincustomer">Home</Nav.Link>
                     <Nav.Link className='NavLink' as={NavLink} to="/service">Services</Nav.Link>
                    <Nav.Link className='NavLink' as={NavLink} to="/support">Support</Nav.Link>
                    <Nav.Link className='NavLink'  as={NavLink} to="/price">Pricing</Nav.Link>
                    <Nav.Link className='NavLink'  as={NavLink} to="/about">Contact</Nav.Link>
                </Nav>
                <Nav.Link as={NavLink} to="#" id="profile"><RiUserFill /></Nav.Link>
                <Button >Your Profile</Button>
                
          </Navbar>
          <div className="cont d-flex">
             <div className="lft w-50 p-3 d-flex flex-column gap-2 justify-content-center align-items-center">
                 <h6 className="w-50 rounded-pill text-center fw-normal">Enterprise-grade infrastructure</h6>
                 <h3 className="text-light font-monospace">Parking that <span style={{color:"#6390BD"}}>runs itself</span></h3>
                 <p className='w-75 px-5'>Real-time occupancy, automated enforcement, and revenue reporting — all from one platform you can actually use.</p>
             </div>
             <div className="rght bg-warning w-50">
                Hello
             </div>
          </div>
        </Container>
        </>
    )
}
export default CustomerPage;