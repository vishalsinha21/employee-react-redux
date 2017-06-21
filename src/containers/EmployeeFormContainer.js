import { connect } from 'react-redux'
import EmployeeForm from '../components/EmployeeForm'
import { addEmployee } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (firstName, lastName, phone) => {
    dispatch(addEmployee(firstName, lastName, phone))
  }
})

const EmployeeFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeForm)

export default EmployeeFormContainer
