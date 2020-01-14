import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBooking extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangebookingId = this.onChangebookingId.bind(this);
    this.onChangebookingName = this.onChangebookingName.bind(this);
    this.onChangepaymentProofId = this.onChangepaymentProofId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      bookingId: '',
      bookingName: '',
      paymentProofId: '',
      paymentApproved: false,
      lawyerId : ''
    }
  }

  onChangebookingId(e) {
    this.setState({ bookingId: e.target.value })
  }

  onChangebookingName(e) {
    this.setState({ bookingName: e.target.value })
  }

  onChangepaymentProofId(e) {
    this.setState({ paymentProofId: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const bookingObject = {
      bookingId: this.state.bookingId,
      bookingName: this.state.bookingName,
      paymentProofId: "NEW",
      paymentApproved: this.state.paymentApproved
    };


    axios.post('http://localhost:4000/booking/create-booking', bookingObject)
      .then(res => console.log(res.data));
    this.setState({
      bookingId: '',
      bookingName: '',
      paymentProofId: '',
      paymentApproved: false
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="BookingID">
          <Form.Label>Booking ID</Form.Label>
          <Form.Control type="text" value={this.state.bookingId} onChange={this.onChangebookingId} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Booking Name</Form.Label>
          <Form.Control type="text" value={this.state.bookingName} onChange={this.onChangebookingName} />
        </Form.Group>

        <Form.Group controlId="PaymentProof">
          <Form.Label>Payment Proof</Form.Label>
          <Form.Control type="text" value={this.state.paymentProofId} onChange={this.onChangepaymentProofId} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create booking
        </Button>
      </Form>
    </div>);
  }
}
