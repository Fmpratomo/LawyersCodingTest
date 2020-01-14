import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BookingTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/booking/delete-booking/' + this.props.obj._id)
            .then((res) => {
                console.log('Booking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

    }

    UpdateBooking() {
        const bookingObj = {
            paymentProofId: "APPROVE"
        };
        axios.put('http://localhost:4000/booking/update-booking/' + this.props.obj._id, bookingObj)
            .then((res) => {
                console.log('Booking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        this.props.refreshData();
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.bookingId}</td>
                <td>{this.props.obj.bookingName}</td>
                <td>{this.props.obj.paymentProofId}</td>
                <td>
                    <Button style={{ marginRight: 10 }} onClick={() => {
                        if (window.confirm('Are you sure you wish to Approve this item?'))
                            this.UpdateBooking()
                    }} size="sm" variant="primary">Approve</Button>
                    <Link className="edit-link" to={"/edit-booking/" + this.props.obj._id}>
                        Assign Lawyer
                    </Link>
                </td>
            </tr>
        );
    }
}