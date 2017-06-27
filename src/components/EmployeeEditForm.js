import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import { Link, browserHistory } from 'react-router';


class EmployeeEditForm extends React.Component {

  constructor() {
    super();
    this.submitForm = (employeeId) => ev => {
      ev.preventDefault();
      this.props.onDelete(employeeId);
      browserHistory.push('/')
    }
    this.updateField = (employeeId, key) => ev => {
      this.props.updateField(employeeId, key, ev.target.value);
    }
  }

  render() {
    const employee = this.props.employee;

    return (

        <form className="edit-employee-form" onSubmit={this.submitForm(employee.id)}>
          <legend>Edit Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <input value={employee.firstName} onChange={this.updateField(employee.id, "firstName")} className="form-control" id="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input value={employee.lastName}  onChange={this.updateField(employee.id, "lastName")} className="form-control" id="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input value={employee.phone} onChange={this.updateField(employee.id, "phone")} className="form-control" id="phone" type="text" placeholder="Phone" />
          </div>
          <hr/>
          <Link to="/" className="btn">Edit</Link>
            &nbsp;&nbsp;
          <button type="submit" className="btn btn-danger">Delete</button>
        </form>
    );
  }
}


export default EmployeeEditForm

