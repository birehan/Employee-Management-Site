import * as types from "../constants/actionTypes";

const initialState = {
  employees: [],
  loading: false,
  success: false,
  failed: false,
  message: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Fetch all conditions
    case types.FETCH_ALL:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        loading: false,
        success: true,
      };
    case types.FETCH_EMPLOYEES_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
      };
    // Create employee conditions
    case types.CREATE:
      return {
        ...state,
        loading: true,
      };
    case types.CREATE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
        success: true,
      };
    case types.CREATE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        message: action.payload,
      };

    // Update employee conditions
    case types.UPDATE:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_SUCCESS:
      return {
        ...state,
        employees: state.employees.map((employee) =>
          employee._id === action.payload._id ? action.payload : employee
        ),
        loading: false,
        success: true,
      };
    case types.UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        message: action.payload,
      };
    // Delete employee
    case types.DELETE:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_SUCCESS:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee._id !== action.payload
        ),
        loading: false,
        success: true,
      };
    case types.DELETE_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        failed: true,
        message: action.payload,
      };

    default:
      return state;
  }
};
