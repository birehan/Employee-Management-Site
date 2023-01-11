import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import * as api from "../api/index";

function* getEmployees() {
  try {
    const employees = yield call(api.getEmployees);

    yield put({ type: types.FETCH_EMPLOYEES_SUCCESS, payload: employees });
  } catch (error) {
    yield put({ type: types.FETCH_EMPLOYEES_FAILED, message: error.message });
  }
}

function* createEmployee({ payload }) {
  try {
    const employee = yield call(api.createEmployee, payload);
    yield put({ type: types.CREATE_SUCCESS, payload: employee });
  } catch (error) {
    yield put({ type: types.CREATE_FAILED, message: error.message });
  }
}

function* updateEmployee({ payload }) {
  try {
    const employee = yield call(api.updateEmployee, payload);
    yield put({ type: types.UPDATE_SUCCESS, payload: employee });
  } catch (error) {
    yield put({ type: types.UPDATE_FAILED, message: error.message });
  }
}

function* deleteEmployee({ payload }) {
  try {
    const id = yield call(api.deleteEmployee, payload);
    yield put({ type: types.DELETE_SUCCESS, payload: id });
  } catch (error) {
    yield put({ type: types.DELETE_FAILED, message: error.message });
  }
}

function* employeeSaga() {
  yield takeEvery(types.FETCH_ALL, getEmployees);
  yield takeEvery(types.CREATE, createEmployee);
  yield takeEvery(types.UPDATE, updateEmployee);
  yield takeEvery(types.DELETE, deleteEmployee);
}

export default employeeSaga;
