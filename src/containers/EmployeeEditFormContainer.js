import { connect } from 'react-redux'
import EmployeeEditForm from '../components/EmployeeEditForm'
import { deleteEmployee, editEmployee } from '../actions'
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  employee: _.find(state.employees, {'id': ownProps.params.id})
})

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(deleteEmployee(id))
  },
  onEdit: (firstName, lastName, phone) => {
    dispatch(editEmployee(firstName, lastName, phone))
  }

})

const EmployeeEditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditForm)

export default EmployeeEditFormContainer
