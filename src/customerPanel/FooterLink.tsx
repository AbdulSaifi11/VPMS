import {RiFunctionAiLine,RiArrowRightDoubleLine} from "@remixicon/react";
import {Container,Image} from 'react-bootstrap';
import PNG_parking from '/src/assets/PNG_parking.png';
import useRef from 'react';
import './FooterLinkcss.css';
export default function FooterLink(){
function Features(){
    return(
    <>
    <Container className="container fluid">
    <h4 className="feature mx-2 mb-4"><RiFunctionAiLine className="text-info"/>Features</h4>
        <h5 className="text-warning checkIn"> <RiArrowRightDoubleLine />Vehicle Check-In System</h5>
        <ul>
            <li >Valet staff can register a vehicle when it arrives.</li>
            <li>Details like vehicle number, owner name, and check-in time are recorded.</li>
        </ul>
        <h5 className="text-warning parkingTicket"> <RiArrowRightDoubleLine />Digital Parking Ticket</h5>
        <ul>
            <li >The system generates a digital ticket or token number for each parked vehicle.</li>            
        </ul>
        <h5 className="text-warning checkOut"> <RiArrowRightDoubleLine />Vehicle Check-Out</h5>
        <ul>
            <li>When the customer returns, the system records the check-out time and releases the vehicle.</li>
        </ul> 
        <h5 className="text-warning search"> <RiArrowRightDoubleLine />Vehicle Search</h5>
        <ul>
            <li>Staff can quickly find a vehicle using the ticket number or vehicle number.</li>
        </ul>
        <h5 className="text-warning management"> <RiArrowRightDoubleLine />Valet Staff Management</h5>
        <ul>
            <li>Admin can manage valet staff and monitor their activities.</li>
        </ul>
        <h5 className="text-warning loginSys"> <RiArrowRightDoubleLine />Secure Login System</h5>
        <ul>
            <li>Authentication system for admin and valet staff to access the platform securely.</li>
        </ul>
        <Image src={PNG_parking} alt="parking" width="400vw" height="400vh" style={{position:"absolute",right:"7vw",bottom:"0vh",zIndex:"1"}}/>
    </Container>
    </>
 )
} 
   function Pricing(){
    return(
        <>
           <h5>Pricing</h5>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> </>
)
}
 function Service(){
    return(
    <>
   <h5>Service</h5>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></>
)
}
 function Blog(){
    return(
    <>
    <h5>Blog</h5>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></>
)
}
 function Support(){
    return(
    <>
   <h5>Support</h5>
    <br></br><br></br></>
)
}
}
