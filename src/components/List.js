import React from 'react'
import Container from './Container'
import Header from './Header'
import EmployeeListContainer from '../containers/EmployeeListContainer'

const List = () => (
    <Container>
      <Header />
      <EmployeeListContainer />
    </Container>
)

export default List

