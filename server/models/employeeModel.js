import mongoose from "mongoose";
import Joi from "joi";

const employeeSchema = mongoose.Schema({
  username: String,
  email: String,
  phoneNumber: String,
  role: String,
  imageFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export var Employee = mongoose.model("employee", employeeSchema);

export function validateEmployee(employee) {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    phoneNumber: Joi.string().required(),
    role: Joi.string().required(),
    imageFile: Joi.string().required(),
  });
  return schema.validate(employee);
}

// exports.validateEmployee = validateEmployee;
// exports.Employee = Employee;
