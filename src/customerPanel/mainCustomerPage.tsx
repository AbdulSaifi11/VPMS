import "./mainCustomerPage.css";
import { Container, Navbar, Nav, Button, Card, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  RiUserFill,
  RiArrowRightUpLine,
  RiCircleFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiCopyrightLine,
} from "@remixicon/react";
import "./LoginPageCSS.css";
import park from "../assets/car_park_tree.png";
function CustomerPage() {
  return (
    <>
      <Container fluid id="customer_container">
        <Navbar className="customer_navbar bg-secondary">
          <Navbar.Brand
            id="customer_brand"
            className="text-danger fw-bold"
            style={{
              position: "absolute",
              paddingLeft: "10px",
              left: "1vw",
              top: "0vh",
            }}
          >
            VPMS{" "}
            <p
              style={{
                position: "absolute",
                top: "2vh",
                left: "0.3vw",
                paddingLeft: "10px",
                color: "black",
              }}
            >
              . .
            </p>
          </Navbar.Brand>
          <Nav className="Nav_customer d-flex justify-content-center w-100 gap-5">
            <Nav.Link id="NavL" as={NavLink} to="/maincustomer">
              Home
            </Nav.Link>
            <Nav.Link className="NavLink" as={NavLink} to="/service">
              Services
            </Nav.Link>
            <Nav.Link className="NavLink" as={NavLink} to="/support">
              Support
            </Nav.Link>
            <Nav.Link className="NavLink" as={NavLink} to="/price">
              Pricing
            </Nav.Link>
            <Nav.Link className="NavLink" as={NavLink} to="/about">
              Contact
            </Nav.Link>
          </Nav>
          <Nav.Link as={NavLink} to="#" id="profile">
            <RiUserFill />
          </Nav.Link>
          <Button>Your Profile</Button>
        </Navbar>
        <section className="Overview">
          <div className="cont d-flex">
            <div className="lft w-50 p-3 d-flex flex-column gap-4 justify-content-center align-items-center">
              <h6 className="title_lft w-50 rounded-pill text-center fw-normal">
                Enterprise-grade infrastructure
              </h6>
              <h3 className="text-light font-monospace">
                Parking that{" "}
                <span style={{ color: "#6390BD" }}>runs itself</span>
                <div></div>
              </h3>
              <p className="para_lft w-75 px-5">
                Real-time occupancy, automated enforcement, and revenue
                reporting — all from one platform you can actually use.
              </p>
              <Button className="lft_btn btn btn-dark w-50">
                Explore Services <RiArrowRightUpLine />
              </Button>
            </div>
            <div className="rght w-50 d-flex flex-column justify-content-center align-items-center">
              <div
                className="cover_slots w-75"
                style={{
                  height: "60%",
                  marginRight: "5em",
                  border: "2px solid #2e4d6c",
                  backgroundColor: "#6390bd1f",
                }}
              >
                <p>
                  Lot A &nbsp; <RiCircleFill style={{ width: "7px" }} /> &nbsp;
                  Floor 2 &nbsp;{" "}
                  <RiCircleFill
                    id="live_dot"
                    style={{ width: "7px", color: "yellow" }}
                  />{" "}
                  &nbsp; Live
                </p>
                <div className="slots">
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    A1
                  </div>
                  <div>A2</div>
                  <div
                    style={{
                      backgroundColor: " rgba(160, 130, 8, 0.436)",
                      border: "1px solid #6390BD",
                    }}
                  >
                    A3
                  </div>
                  <div>A4</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    A5
                  </div>
                  <div>A6</div>
                  <div>B1</div>
                  <div>B2</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    B3
                  </div>
                  <div>B4</div>
                  <div
                    style={{
                      backgroundColor: " rgba(160, 130, 8, 0.436)",
                      border: "1px solid #6390BD",
                    }}
                  >
                    B5
                  </div>
                  <div>B6</div>
                  <div>C1</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    C2
                  </div>
                  <div>C3</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    C4
                  </div>
                  <div
                    style={{
                      backgroundColor: " rgba(160, 130, 8, 0.436)",
                      border: "1px solid #6390BD",
                    }}
                  >
                    C5
                  </div>
                  <div>C6</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    D1
                  </div>
                  <div>D2</div>
                  <div
                    style={{
                      backgroundColor: " rgba(160, 130, 8, 0.436)",
                      border: "1px solid #6390BD",
                    }}
                  >
                    D3
                  </div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    D4
                  </div>
                  <div>D5</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    D6
                  </div>
                  <div>E1</div>
                  <div>E2</div>
                  <div
                    style={{
                      backgroundColor: "#2e4d6c",
                      border: "1px solid #6390BD",
                    }}
                  >
                    E3
                  </div>
                  <div>E4</div>
                  <div>E5</div>
                  <div>E6</div>
                </div>
                <div className="divider_slot_sec"></div>
                <div className="live_index d-flex gap-4">
                  <p>
                    30 <span style={{ color: "#6390bd90" }}>Total</span>
                  </p>
                  <p>
                    9 <span style={{ color: "#6390bd90" }}>Free</span>
                  </p>
                  <p>
                    4 <span style={{ color: "#6390bd90" }}>Reserved</span>
                  </p>
                </div>
              </div>

              <div className="mainDetail d-flex text-light gap-5">
                <div style={{ display: "inline" }}>
                  <h4>2.4M</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      width: "110px",
                      position: "relative",
                      top: "-1vh",
                      left: "0vw",
                    }}
                  >
                    Space Managed
                  </p>
                </div>
                <div style={{ display: "inline" }}>
                  <h4>99.9%</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      width: "110px",
                      position: "relative",
                      top: "-1vh",
                      left: "0vw",
                    }}
                  >
                    System uptime
                  </p>
                </div>
                <div style={{ display: "inline" }}>
                  <h4>340+</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      width: "110px",
                      position: "relative",
                      top: "-1vh",
                      left: "0vw",
                    }}
                  >
                    Facilities worldwide
                  </p>
                </div>
                <div style={{ display: "inline" }}>
                  <h4>38%</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      width: "130px",
                      position: "relative",
                      top: "-1vh",
                      left: "0vw",
                    }}
                  >
                    Avg. revenue increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="whatWeOffer">
          <p>What We Offer</p>
          <h4>Everything your lot needs</h4>
          <h6>
            Modular services you can deploy together or separately — connect to
            your existing hardware or use ours.
          </h6>
          <div className="offer_service d-grid">
            <div className="off_block">
              <div id="yellow"></div>
              <p className="block_head">Real-time Occupancy</p>
              <p className="block_content">
                Sensor fusion gives you per-space status updated every 2
                seconds. Push to signage, apps, or your own systems.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
            <div className="off_block">
              <div id="green"></div>
              <p className="block_head">Automated payments</p>
              <p className="block_content">
                License-plate-linked billing, mobile pay, and monthly permits —
                no ticket, no kiosk, no friction.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
            <div className="off_block">
              <div id="blue"></div>
              <p className="block_head">Violation enforcement</p>
              <p className="block_content">
                Camera-based detection issues notices automatically. Integrate
                with your city's citation system or use ours.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
            <div className="off_block">
              <div id="black"></div>
              <p className="block_head">Reservation & pre-booking</p>
              <p className="block_content">
                Let drivers reserve spaces in advance. Dynamic pricing fills
                your lot at peak times without manual intervention.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
            <div className="off_block">
              <div id="red"></div>
              <p className="block_head">Analytics & reporting</p>
              <p className="block_content">
                Revenue breakdowns, dwell time, turnover rate, and custom
                dashboards delivered daily or on demand.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
            <div className="off_block">
              <div id="aqua"></div>
              <p className="block_head">API & integrations</p>
              <p className="block_content">
                REST + webhooks. Connect ParkOS to your ERP, mobility platform,
                or building management system in minutes.<br></br>
                <Link to="" className="text-decoration-none">
                  Learn More
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="howItWorks">
          <p>How It Works</p>
          <h4>Live in days, not months</h4>
          <h6>
            Our team handles hardware provisioning, sensor calibration, and
            software setup end to end.
          </h6>
          <div className="howWorks_points">
            <div className="works_block">
              <h6 className="works_head">
                <div id="count">1</div>&nbsp;&nbsp;&nbsp;&nbsp;Site survey &
                hardware spec
              </h6>
              <p className="works_content">
                We assess your lot, recommend the right sensor mix, and provide
                a deployment plan with exact costs — no surprises.
              </p>
            </div>
            <div className="works_block">
              <h6 className="works_head">
                <div id="count">2</div>&nbsp;&nbsp;&nbsp;&nbsp;Install &
                calibrate
              </h6>
              <p className="works_content">
                Certified techs install sensors and cameras. The system
                calibrates itself overnight; no lane closures required.
              </p>
            </div>
            <div className="works_block">
              <h6 className="works_head">
                <div id="count">3</div>&nbsp;&nbsp;&nbsp;&nbsp;Connect your
                workflows
              </h6>
              <p className="works_content">
                Map your existing permit rules, payment processors, and
                notification preferences — we import your data.
              </p>
            </div>
            <div className="works_block">
              <h6 className="works_head">
                <div id="count">4</div>&nbsp;&nbsp;&nbsp;&nbsp;Monitor &
                optimize
              </h6>
              <p className="works_content">
                ParkOS runs continuously. Your dashboard shows live performance;
                our team handles incidents before you notice them.
              </p>
            </div>
          </div>
          <div>
            <Image id="parkTreeImg" src={park} />
          </div>
        </section>
        <section id="plans">
          <p>Plans</p>
          <h4>Simple, usage-based pricing</h4>
          <h6>
            Scale up or down as your needs change. No lock-in, no per-seat
            charges.
          </h6>
          <div className="plans_cards">
            <Card className="Card_P">
              <Card.Body>
                <h5>Starter</h5>
                <p className="fw-light">
                  <span className="fs-3">₹4,999</span>/mo
                </p>
                <p id="body_content">
                  Up to 100 spaces, 1 lot <br/><br />
                 <span className="fw-lighter font-monospace fs-6">Real-time occupancy Mobile payments
                  Basic reporting Email support</span>
                </p>
                <Button className="btn btn-light position-absolute end-0">Get Started</Button>
              </Card.Body>
            </Card>
           <Card className="Card_P">
              <Card.Body>
                <h5>Professional</h5>
                <p className="fw-light">
                  <span className="fs-3">₹14,999</span>/mo
                </p>
                <p id="body_content">
                  Up to 500 spaces, 5 lots<br/><br />
                 <span className="fw-lighter font-monospace fs-6">Everything in Starter 
                  Violation enforcement Pre-booking & dynamic pricing Full analytics suite
                  API access Priority support</span>
                </p>
                <Button className="btn btn-light position-absolute end-0">Get Started</Button>
              </Card.Body>
            </Card>
           <Card className="Card_P">
              <Card.Body>
                <h5>Enterprise</h5>
                <p className="fw-light fs-3">Custom</p>
                <p id="body_content">
                  Unlimited spaces & lots <br/><br />
                 <span className="fw-lighter font-monospace fs-6">Everything in Pro 
                  Dedicated hardware support SLA-backed 99.9% uptime Custom integrations
                  Onsite onboarding</span></p>
                <Button className="btn btn-light position-absolute end-0">Contact<RiArrowRightUpLine /></Button>
              </Card.Body>
            </Card>
          </div>
        </section>
        <footer
          style={{
            backgroundColor: "#0E1B35",
            height: "auto",
            width: "100%",
          }}
          className="footer position-relative rounded-3"
        >
          <div className="footLogo ">
            <h5 className="text-danger fw-bold">VPMS</h5>
            <h5 className="dots fw-bold">. .</h5>
          </div>
          <p className="footTitle text-secondary">
            Find,Book and Park-<span>All in Just Few Clicks.</span>
          </p>
          <div className="socialLink d-flex  gap-4 ">
            <a href="https://www.twitter.com" className=" text-light">
              <RiTwitterXFill className="socialIcon" />
            </a>
            <a href="https://www.Instagram.com" className=" text-danger">
              <RiInstagramLine className="socialIcon" />
            </a>
            <a href="https://www.Linkedin.com" className=" text-primary">
              <RiLinkedinBoxFill className="socialIcon" />
            </a>
            <a href="https://www.Facebook.com" className=" text-primary">
              <RiFacebookBoxFill className="socialIcon" />
            </a>
          </div>
          <div className="d-flex footLinks">
            <div className="headItem d-flex flex-column fw-bold text-light">
              Products
              <Link
                to="/features"
                className="item text-decoration-none text-secondary"
              >
                Features
              </Link>
              <Link
                to="/price"
                className="item text-decoration-none text-secondary"
              >
                Pricing
              </Link>
              <Link
                to="/service"
                className="item text-decoration-none text-secondary"
              >
                Services
              </Link>
            </div>
            <div className="headItem d-flex flex-column fw-bold text-light">
              Resources
              <Link
                to="/about"
                className="item text-decoration-none text-secondary"
              >
                Career
              </Link>
              <Link
                to="/support"
                className="item text-decoration-none text-secondary"
              >
                Support
              </Link>
            </div>
            <div className="headItem d-flex flex-column fw-bold text-light">
              Company
              <Link
                to="/login"
                className="item text-decoration-none text-secondary"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="item text-decoration-none text-secondary"
              >
                About
              </Link>
              <Link
                to="/about"
                className="item text-decoration-none text-secondary"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            className="w-100 border border-light line"
            style={{ position: "absolute", bottom: "55px" }}
          ></div>
          <div className="footerBottom d-flex">
            <RiCopyrightLine
              className="copyright text-secondary"
              style={{ width: "15px", position: "relative", bottom: "0.5vh" }}
            />
            <p className=" text-secondary" style={{ fontSize: "0.7rem" }}>
              {" "}
              &nbsp;&nbsp;2026 &nbsp;&nbsp;&nbsp; VPMS. All rights reserved
            </p>
            <a
              id="terms"
              href="#"
              style={{
                color: "black",
                fontWeight: "normal",
                fontSize: "12px",
                position: "relative",
                left: "52vw",
              }}
            >
              Privacy Policy
            </a>
            <a
              id="terms"
              href="#"
              style={{
                color: "black",
                fontWeight: "normal",
                fontSize: "12px",
                position: "relative",
                left: "55vw",
              }}
            >
              Terms of Services
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
}
export default CustomerPage;
