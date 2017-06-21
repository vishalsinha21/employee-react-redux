const employeesArr = [
  {
    firstName: "Vishal",
    lastName: "Sinha",
    phone: "9988776655"
  },
  {
    firstName: "Nishant",
    lastName: "Varshney",
    phone: "9944556677"
  },
  {
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
          firstName: action.firstName,
          lastName: action.lastName,
          phone: action.phone
        }
      ]
    default:
      return state
  }
}

export default employees
