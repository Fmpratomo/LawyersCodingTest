import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateBooking from "./components/create-booking.component";
import EditBooking from "./components/edit-booking.component";
import BookingList from "./components/booking-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-booking"} className="nav-link">
                React MERN Stack Apps
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-booking"} className="nav-link">
                  Create Bookings
                </Link>
              </Nav>

              <Nav>
                <Link to={"/booking-list"} className="nav-link">
                  Booking List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateBooking} />
                <Route path="/create-booking" component={CreateBooking} />
                <Route path="/edit-booking/:id" component={EditBooking} />
                <Route path="/booking-list" component={BookingList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;