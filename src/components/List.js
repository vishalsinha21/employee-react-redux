import React from 'react'
import Header from './Header'
import EmployeeListContainer from '../containers/EmployeeListContainer'

const List = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <EmployeeListContainer />
      </div>
    </div>
  </div>
)

export default List

