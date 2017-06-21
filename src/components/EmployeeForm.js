import React from 'react'
import PropTypes from 'prop-types'

const EmployeeForm = ({ onSubmit }) => (
  <form className="edit-employee-form" onSubmit={(e) => {
    e.preventDefault();
    onSubmit(document.getElementById("firstName").value,
      document.getElementById("lastName").value,
      document.getElementById("phone").value);
  }}>
    <legend>New Employee</legend>
    <div className="form-group">
      <label>First Name</label>
      <input className="form-control" id="firstName" name="firstName" component="input" type="text" placeholder="First Name" />
    </div>
    <div className="form-group">
      <label>Last Name</label>
      <input className="form-control" id="lastName" name="lastName" component="input" type="text" placeholder="Last Name" />
    </div>
    <div className="form-group">
      <label>Phone</label>
      <input className="form-control" id="phone" name="phone" component="input" type="text" placeholder="Phone" />
    </div>
    <hr/>
    <button type="submit" className="btn">Create</button>
  </form>
)

export default EmployeeForm

