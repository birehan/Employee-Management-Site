import express from 'express';

import { getEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employee.js';

const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.get('/:id', getEmployeeById);
router.patch('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

export default router;