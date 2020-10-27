export const NEW_ELEMENT = 'NEW_ELEMENT';

export const addAssignment = (name, value) => ({
  type: NEW_ELEMENT,
  name,
  value,
});