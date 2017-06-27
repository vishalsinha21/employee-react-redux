import React from 'react'
import PropTypes from 'prop-types'
import { Link, browserHistory } from 'react-router';

class EmployeeCreateForm extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(
        this.refs.firstName.value,
        this.refs.lastName.value,
        this.refs.phone.value)
    browserHistory.push('/')
  }
  
  render() {

    return (
        <form className="add-employee-form" onSubmit={this.handleSubmit}>
          <legend>Add Employee</legend>
          <div className="form-group">
            <label>First Name</label>
            <input className="form-control" id="firstName" ref="firstName" type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input className="form-control" id="lastName" ref="lastName" type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input className="form-control" id="phone" ref="phone" type="text" placeholder="Phone" />
          </div>
          <hr/>

          <button type="submit" className="btn">Create</button>
          &nbsp;&nbsp;
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

export default EmployeeCreateForm

