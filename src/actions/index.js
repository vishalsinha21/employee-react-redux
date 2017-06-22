let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const addEmployee = (firstName = "first name", lastName = "last name", phone = "99887700") => ({
  type: 'ADD_EMPLOYEE',
  firstName, lastName, phone
})

export const editEmployee = (firstName, lastName, phone) => ({
  type: 'EDIT_EMPLOYEE',
  firstName, lastName, phone
})

export const deleteEmployee = (id) => ({
  type: 'DELETE_EMPLOYEE',
  id
})
