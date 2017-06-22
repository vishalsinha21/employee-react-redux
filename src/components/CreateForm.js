import React from 'react'
import Header from './Header'
import EmployeeCreateFormContainer from '../containers/EmployeeCreateFormContainer'

const CreateForm = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div>
          <Header />
          <EmployeeCreateFormContainer />
        </div>
      </div>
    </div>
  </div>
)

export default CreateForm

