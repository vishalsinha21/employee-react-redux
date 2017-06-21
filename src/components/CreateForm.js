import React from 'react'
import Header from './Header'
import EmployeeFormContainer from '../containers/EmployeeFormContainer'

const CreateForm = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div>
          <Header />
          <EmployeeFormContainer />
        </div>
      </div>
    </div>
  </div>
)

export default CreateForm

