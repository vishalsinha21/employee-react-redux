import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Employee = ({ employee }) => (
<tr>
  <td>{employee.firstName}</td>
  <td>{employee.lastName}</td>
  <td>{employee.phone}</td>
  <td><Link to={`/edit/${employee.id}`} className="btn">Edit</Link></td>
</tr>
)

export default Employee
