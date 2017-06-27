import React from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router';

class EmployeeCreateForm extends React.Component {

  constructor() {
    super();
    this.submitForm = () => ev => {
      ev.preventDefault();
      this.props.onSubmit(
          document.getElementById("firstName").value,
          document.getElementById("lastName").value,
          document.getElementById("phone").value);
      browserHistory.push('/')
    }
  }

  render() {

    return (
        <form className="add-employee-form" onSubmit={this.submitForm()}>
          <legend>Add Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <input className="form-control" id="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input className="form-control" id="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input className="form-control" id="phone" type="text" placeholder="Phone" />
          </div>
          <hr/>

          <button type="submit" className="btn">Create</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}
export default EmployeeCreateForm

