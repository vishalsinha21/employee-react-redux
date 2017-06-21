import { combineReducers } from 'redux'
import employees from './employees'

const employeeApp = combineReducers({
  employees
})

export default employeeApp
