import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BookingTableRow from './BookingTableRow';



export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  };

  showData() {
    axios.get('http://localhost:4000/booking/')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  };

  componentDidMount() {
    this.showData();
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <BookingTableRow obj={res} key={i} refreshData={this.showData()}/>;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Booking Name</th>
            <th>Paymen Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}