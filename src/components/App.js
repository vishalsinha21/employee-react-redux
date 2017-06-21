import React from 'react'
import Header from './Header'
import EmployeeListContainer from '../containers/EmployeeListContainer'
import SubHeader from '../containers/SubHeader'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <Header />
        <SubHeader />
        <EmployeeListContainer />
      </div>
    </div>
  </div>
)

export default App

