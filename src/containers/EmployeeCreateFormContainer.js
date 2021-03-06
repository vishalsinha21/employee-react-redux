import { connect } from 'react-redux'
import EmployeeCreateForm from '../components/EmployeeCreateForm'
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
)(EmployeeCreateForm)

export default EmployeeCreateFormContainer
