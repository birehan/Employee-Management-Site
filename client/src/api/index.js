import axios from "axios";
const url = "http://localhost:5000/employees";

export const getEmployees = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const createEmployee = async (employee) => {
  try {
    const { data } = await axios.post(url, employee);
    console.log("data:", data);
    return data;
  } catch (error) {
    console.log("error: ", error);
    return error.message;
  }
};

export const updateEmployee = async (employee) => {
  const { data } = await axios.patch(`${url}/${employee._id}`, employee);
  return data;
};

export const deleteEmployee = async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
};
