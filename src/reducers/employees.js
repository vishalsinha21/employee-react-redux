var randomID = require("random-id");

const employeesArr = [
  {
    id: randomID(10),
    firstName: "Vishal",
    lastName: "Sinha",
    phone: "9988776655"
  },
  {
    id: randomID(10),
    firstName: "Nishant",
    lastName: "Varshney",
    phone: "9944556677"
  },
  {
    id: randomID(10),
    firstName: "Rajat",
    lastName: "Sharma",
    phone: "6677554499"
  }
]

const employees = (state = employeesArr, action) => {

  switch (action.type) {
    case "ADD_EMPLOYEE":
      return [
        ...state,
        {
          id: randomID(10),
          firstName: action.firstName,
          lastName: action.lastName,
          phone: action.phone
        }
      ]
    case "DELETE_EMPLOYEE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EMPLOYEE":
      return
          state.map(employee => employee.id === action.id ?
          {...employee, firstName: action.firstName, lastName: action.lastName, phone: action.phone} :
          employee)
    case "UPDATE_FIELD":
        var newState = state.map(employee => employee.id === action.id ?
        {...employee, [action.key]: action.value} :
      employee)
      return newState;
    default:
      return state
  }

}

export default employees
