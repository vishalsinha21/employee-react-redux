import { connect } from 'react-redux'
import EmployeeEditForm from '../components/EmployeeEditForm'
import { deleteEmployee, editEmployee, updateField } from '../actions'
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  employee: _.find(state.employees, {'id': ownProps.id})
})

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(deleteEmployee(id))
  },
  onEdit: (firstName, lastName, phone) => {
    dispatch(editEmployee(firstName, lastName, phone))
  },
  updateField: (id, key, value) => {
    dispatch(updateField(id, key, value))
  }

})

const EmployeeEditFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeEditForm)

export default EmployeeEditFormContainer
