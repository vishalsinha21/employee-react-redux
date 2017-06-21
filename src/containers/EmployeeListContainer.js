import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import EmployeeList from '../components/EmployeeList'

const mapStateToProps = (state, ownProps) => ({
  employees: state.employees
})

const mapDispatchToProps = (dispatch) => ({})

const EmployeeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList)

export default EmployeeListContainer
