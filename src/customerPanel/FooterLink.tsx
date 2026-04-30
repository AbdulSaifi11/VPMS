import {RiFunctionAiLine,RiArrowRightDoubleLine,RiCornerDownRightFill,RiPhoneLine,RiMailLine} from "@remixicon/react";
import {Container,Image,Card,Col,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import PNG_parking from '/src/assets/PNG_parking.png';
import '/src/customerPanel/FooterLinkcss.css';
import Support_Image from '/src/assets/Sup.jpg';
export  function Features(){
    return(
    <>
                                                    {/* //Features */}
    <Container className="Mycontainer fluid">
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
                                                            // Pricing
  export function Pricing(){
    return(
        <>
        <div className="cardContainer d-flex flex-md-column flex-sm-column flex-lg-row justify-content-around" style={{width:"100vw"}}>
        <Card className="this_card" id="price">
           <header>Daily Plan</header>
           <div id="pricetag"><p>99 Rs/Hr.</p></div>
           <div className="parkingPoint d-flex flex-column  justify-content-center " style={{height:"50vh"}}>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check in.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Digital ticket System.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Image uploading at parking time.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Valet tracking.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check out.</h6>
           </div>
           <Link to="/login" id="booking"><p>@Book Plan</p></Link>
        </Card>
        <Card id="price">
            <header>Monthly Plan</header>
            <div id="pricetag"><p>2999 Rs/Mo.</p></div>
            <div className="parkingPoint d-flex flex-column  justify-content-center " style={{height:"50vh"}}>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check in each entry.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Saperate parking space.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Image uploading at parking time.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle safety.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check out in each exit.</h6>
           </div>
           <Link to="/login" id="booking"><p>@Book Plan</p></Link>
        </Card>
        <Card id="price">
            <header>    3 Months-Combo</header>
            <div id="pricetag"><p>Rs. 7499 Only</p></div>
            <div className="parkingPoint d-flex flex-column justify-content-center " style={{height:"50vh"}}>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check in on each entry.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Saperate parking space.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Extra saving.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Image uploading at parking time.</h6>
            <h6 className="text-light fw-normal "><RiCornerDownRightFill />Vhicle check out in each exit.</h6>
           </div>
           <Link to="/login" id="booking"><p>@Book Plan</p></Link>
        </Card>
        </div>
        </>
)
}
                                                                //Services
 export function Service(){
    return(
    <>
    <Container className="d-grid align-items-center" style={{width:"95vw",height:"90vh",position:"relative",left:"5vw"}}>
        <Row>
        <Col xs={12} md={12} lg={12}><h4 className=" manage d-inline"><RiArrowRightDoubleLine />What you can manage?</h4></Col><br></br><br />
        <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Vehicle Check in</h5>  
            <p className="text-center text-dark">Capture plate, owner details and issue a token instantly.</p>  
        </Link></Col>
        <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Slot management</h5>  
            <p className="text-center text-dark">View and assign available, occupied, and reserved slots.</p>      
        </Link></Col>
        <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Payment processing</h5>  
            <p className="text-center text-dark">Calculate charges and accept cash, card, or UPI.</p>      
        </Link></Col>
           <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Vehicle retrieval</h5>  
            <p className="text-center text-dark">Track which attendant is fetching the vehicle with ETA.</p>      
        </Link></Col>
           <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Damage inspection</h5>  
            <p className="text-center text-dark">Record pre-existing conditions at check-in for liability.</p>      
        </Link></Col>
           <Col xs={12} md={6} lg={4} className="columnService"><Link to="/" className="serviceBox">
            <h5 className="text-warning text-center fw-bold">Reports & analytics</h5>  
            <p className="text-center text-dark">Revenue, peak hours, and occupancy trends at a glance.</p>      
        </Link></Col>
         </Row>
    </Container>
   </>
)
}

export function Support(){
return(
    <>
    <div className="supportConatiner bg-light">
        <Image id="topImage" src={Support_Image} alt="support"/>
        <h2 className="image_Text">Help & Support <br /> <span className="fs-6 text-light"><span className="fs-5 fst-italic text-danger">V</span>alet <span className="fs-5 fst-italic text-danger">P</span>arking <span className="fs-5 fst-italic text-danger">M</span>anagement <span className="fs-5 fst-italic text-danger">S</span>ystem</span></h2>
        <div className="cards">
        <Card className="support_card">
            <Card.Header className="header text-center fw-bold">Contact</Card.Header>
            <Card.Body className="bg-light">
                <h6><RiPhoneLine /> +91 1234567890</h6>
                <h6><RiMailLine /><a className="text-dark text-decoration-none" href="mailto:supportvpms123@gmail.com"> supportvpms123@gmail.com</a></h6>
            </Card.Body>
        </Card>
         <Card className="support_card">
            <Card.Header className="header text-center fw-bold">Mobile App</Card.Header>
            <Card.Body className="bg-light">
                <h6><RiArrowRightDoubleLine />All things in single app.</h6>
                <h6><RiArrowRightDoubleLine />User History.</h6>
                <h6><RiArrowRightDoubleLine />Fast Services.</h6>
            </Card.Body>
        </Card>
         <Card className="support_card">
            <Card.Header  className="header text-center fw-bold">FAQ</Card.Header>
            <Card.Body className="bg-light">
                <p className="overflow-scroll " >
👉 Q1: What should I do if my booking is not confirmed?<br/>
👉 A: Please check your payment status or try booking again. <br /><br />

👉 Q2: Payment was deducted but the slot was not booked. What should I do? <br />
👉 A: The amount will be refunded within 24 hours, or you can contact support for assistance. <br /><br />

👉 Q3: What should I do if the valet is late? <br />
👉 A: You can check live tracking or contact support directly. <br /><br />

👉 Q4: How can I report car damage? <br />
👉 A: You can raise a complaint from the support page and upload photos as proof.</p>
            </Card.Body>
        </Card>
        </div>
    </div>
    </>
)
}

