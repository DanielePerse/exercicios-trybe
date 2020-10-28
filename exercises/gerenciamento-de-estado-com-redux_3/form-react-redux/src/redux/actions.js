export const NEW_ELEMENT = 'NEW_ELEMENT';

export const addAssignment = (name, value, checkbox) => ({
  type: NEW_ELEMENT,
  name,
  value,
  checkbox,
});

//export const addCheckbox = (value) => ({
  //type: NEW_ELEMENT,
  //value: false,
//});