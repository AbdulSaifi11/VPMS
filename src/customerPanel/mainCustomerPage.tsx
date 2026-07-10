import  './mainCustomerPage.css';
import {Container,Navbar,Nav,Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {RiUserFill,RiArrowRightUpLine,RiCircleFill} from '@remixicon/react';
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
             <div className="lft w-50 p-3 d-flex flex-column gap-4 justify-content-center align-items-center">
                 <h6 className="title_lft w-50 rounded-pill text-center fw-normal">Enterprise-grade infrastructure</h6>
                 <h3 className="text-light font-monospace">Parking that <span style={{color:"#6390BD"}}>runs itself</span><div></div></h3>
                 <p className='para_lft w-75 px-5'>Real-time occupancy, automated enforcement, and revenue reporting — all from one platform you can actually use.</p>
                 <Button className='lft_btn btn btn-dark w-50'>Explore Services <RiArrowRightUpLine /></Button>
             </div>
             <div className="rght w-50 d-flex flex-column justify-content-center align-items-center">
                <div className="cover_slots w-75" style={{height:"60%",marginRight:"5em",border:"2px solid #2e4d6c",backgroundColor:"#6390bd1f"}}>
                    <p>Lot A &nbsp; <RiCircleFill style={{width:"7px"}}/> &nbsp; Floor 2 &nbsp; <RiCircleFill id="live_dot" style={{width:"7px",color:"yellow"}}/> &nbsp; Live</p>
                    <div className="slots">
                        <div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}}>A1</div><div>A2</div><div style={{backgroundColor:" rgba(160, 130, 8, 0.436)",border:"1px solid #6390BD"}} >A3</div><div>A4</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}}>A5</div><div>A6</div>
                        <div>B1</div><div>B2</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}}>B3</div><div>B4</div><div style={{backgroundColor:" rgba(160, 130, 8, 0.436)",border:"1px solid #6390BD"}} >B5</div><div>B6</div>
                        <div>C1</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}} >C2</div><div>C3</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}} >C4</div><div style={{backgroundColor:" rgba(160, 130, 8, 0.436)",border:"1px solid #6390BD"}} >C5</div><div>C6</div>
                        <div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}} >D1</div><div>D2</div><div style={{backgroundColor:" rgba(160, 130, 8, 0.436)",border:"1px solid #6390BD"}} >D3</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}} >D4</div><div>D5</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}} >D6</div>
                        <div>E1</div><div>E2</div><div style={{backgroundColor:"#2e4d6c",border:"1px solid #6390BD"}}>E3</div><div>E4</div><div>E5</div><div>E6</div>
                    </div>
                    <div className="divider_slot_sec"></div>
                    <div className="live_index d-flex gap-4">
                     <p>30 <span style={{color:"#6390bd90"}}>Total</span></p>
                     <p>9 <span style={{color:"#6390bd90"}}>Free</span></p>
                     <p>4 <span style={{color:"#6390bd90"}}>Reserved</span></p>
                    </div>
                </div>
             </div>
          </div>
        </Container>
        </>
    )
}
export default CustomerPage;