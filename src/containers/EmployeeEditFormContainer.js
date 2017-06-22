import { connect } from 'react-redux'
import EmployeeEditForm from '../components/EmployeeEditForm'
import { addEmployee } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (firstName, lastName, phone) => {
    dispatch(addEmployee(firstName, lastName, phone))
  }
})

const EmployeeEditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditForm)

export default EmployeeEditFormContainer
