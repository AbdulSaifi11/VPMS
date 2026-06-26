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
                <Navbar.Brand id="customer_brand" className="text-danger fw-bold" style={{position:"absolute",left:"1vw",top:"0vh"}}>VPMS <p style={{position:"absolute",top:"2vh",left:"0.3vw",color:"black"}}>. .</p></Navbar.Brand>
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
             <div className="lft bg-info w-50">
                Hey
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