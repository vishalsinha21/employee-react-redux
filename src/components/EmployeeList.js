import React from 'react'
import PropTypes from 'prop-types'
import Employee from './Employee'
import { Link } from 'react-router';


const EmployeeList = ({ employees }) => (

    <div>
      <Link to="/new" className="btn btn-primary">New</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {employees.map(employee => <Employee key={employee.id} employee={employee} />)}
        </tbody>
      </table>
    </div>
)

export default EmployeeList
