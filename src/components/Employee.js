import React from 'react'
import PropTypes from 'prop-types'

const Employee = ({ employee }) => (
<tr>
  <td>{employee.firstName}</td>
  <td>{employee.lastName}</td>
  <td>{employee.phone}</td>
</tr>
)

export default Employee
