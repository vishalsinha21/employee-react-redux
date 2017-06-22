import { connect } from 'react-redux'
import EmployeeForm from '../components/EmployeeCreateForm'
import { addEmployee } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (firstName, lastName, phone) => {
    dispatch(addEmployee(firstName, lastName, phone))
  }
})

const EmployeeCreateFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeForm)

export default EmployeeCreateFormContainer
