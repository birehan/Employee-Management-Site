import express from "express";
import mongoose from "mongoose";

import { Employee, validateEmployee } from "../models/employeeModel.js";

const router = express.Router();

export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().select("-__v -createdAt ");

    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id).select(" -__v -createdAt");

    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createEmployee = async (req, res) => {
  const { error } = validateEmployee(req.body);
  if (error) {
    return res.status(400).send({ message: `${error.details[0].message}` });
  }

  const { username, email, phoneNumber, role, imageFile } = req.body;
  let newEmployee = new Employee({
    username,
    email,
    phoneNumber,
    role,
    imageFile,
  });

  try {
    await newEmployee.save();

    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No employee with id: ${id}`);
  }

  const { username, email, phoneNumber, role, imageFile } = req.body;
  if (!username || !email || !phoneNumber || !role || !imageFile) {
    return res.status(400).send({ message: `Input Error` });
  }

  let updatedEmployee = {
    username,
    email,
    phoneNumber,
    role,
    imageFile,
    _id: id,
  };

  try {
    await Employee.findByIdAndUpdate(id, updatedEmployee, { new: true });

    return res.json(updatedEmployee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No employee with id: ${id}`);

  try {
    await Employee.findByIdAndRemove(id);

    res.json({ message: "Employee deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export default router;
