export const addEmployee = (firstName, lastName, phone) => ({
  type: 'ADD_EMPLOYEE',
  firstName, lastName, phone
})

export const editEmployee = (firstName, lastName, phone) => ({
  type: 'EDIT_EMPLOYEE',
  firstName, lastName, phone
})

export const updateField = (id, key, value) => ({
  type: 'UPDATE_FIELD',
  id, key, value
})

export const deleteEmployee = (id) => ({
  type: 'DELETE_EMPLOYEE',
  id
})
