import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export const getEmployees = () => {
  return { type: FETCH_ALL };
};

export const createEmployee = (employee) => {
  return { type: CREATE, payload: employee };
};

export const updateEmployee = (employee) => {
  return { type: UPDATE, payload: employee };
};

export const deleteEmployee = (id) => {
  return { type: DELETE, payload: id };
};
