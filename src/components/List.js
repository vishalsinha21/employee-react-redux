import React from 'react'
import Header from './Header'
import EmployeeListContainer from '../containers/EmployeeListContainer'
import SubHeader from '../containers/SubHeader'
import EmployeeFormContainer from '../containers/EmployeeFormContainer'

const List = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <SubHeader />
        <EmployeeFormContainer />
        <EmployeeListContainer />
      </div>
    </div>
  </div>
)

export default List

