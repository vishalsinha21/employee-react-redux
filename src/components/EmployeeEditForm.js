import React from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router';


class EmployeeEditForm extends React.Component {

  constructor() {
    super();
    this.submitForm = (employeeId) => ev => {
      ev.preventDefault();
      this.props.onDelete(employeeId);
      browserHistory.push('/')
    }
  }


  render() {
    const employee = this.props.employee;

    return (
        <form className="edit-employee-form" onSubmit={this.submitForm(employee.id)}>
          <legend>Edit Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <input value={employee.firstName} className="form-control" id="firstName" name="firstName" component="input" type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input value={employee.lastName} className="form-control" id="lastName" name="lastName" component="input" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input value={employee.phone} className="form-control" id="phone" name="phone" component="input" type="text" placeholder="Phone" />
          </div>
          <hr/>


          <button type="submit" className="btn">Edit</button>
          <button type="submit" className="btn">Delete</button>

        </form>
    );
  }
}


export default EmployeeEditForm

