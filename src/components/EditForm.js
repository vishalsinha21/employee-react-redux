import React from 'react'
import Container from './Container'
import Header from './Header'
import EmployeeEditFormContainer from '../containers/EmployeeEditFormContainer'

const EditForm = (props) => (
    <Container>
      <Header />
      <EmployeeEditFormContainer id={props.params.id} />
    </Container>
)

export default EditForm

