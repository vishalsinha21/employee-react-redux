import React from 'react'
import Header from './Header'
import EmployeeEditFormContainer from '../containers/EmployeeEditFormContainer'

const EditForm = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div>
          <Header />
          <EmployeeEditFormContainer />
        </div>
      </div>
    </div>
  </div>
)

export default EditForm

