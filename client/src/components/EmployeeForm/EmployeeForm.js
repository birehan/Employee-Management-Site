import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  TextField,
  Button,
  Dialog,
  IconButton,
  Divider,
  DialogContent,
  Box,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import FileBase from "react-file-base64";
import { Flex, Text } from "rebass";

import { createEmployee, updateEmployee } from "../../actions/employees.js";

import { AiOutlineClose } from "react-icons/ai";
import { css } from "@emotion/css";

const EmployeeForm = ({ openForm, setOpenForm, employee }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [employeeData, setEmployeeData] = useState({
    username: "",
    email: "",
    role: "",
    imageFile: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (employee) setEmployeeData(employee);
  }, [employee]);

  const clear = () => {
    setEmployeeData({
      username: "",
      email: "",
      role: "",
      imageFile: "",
      phoneNumber: "",
    });

    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employeeData.imageFile) {
      setErrorMessage("Image file required!");
      return;
    }

    if (!employee) {
      dispatch(createEmployee(employeeData));
      setOpenForm(false);
      clear();
    } else {
      dispatch(updateEmployee({ ...employeeData, _id: employee?._id }));
      setOpenForm(false);

      clear();
    }
  };

  return (
    <Dialog
      className={css``}
      sx={{ position: "relative !important" }}
      open={openForm}
      onClose={() => setOpenForm(false)}
    >
      <Flex
        className={css`
          display: flex;
          align-items: center;
          position: relative;
          height: 50px;
          padding: 10px;
        `}
      >
        <Text
          className={css`
            font-weight: 550;
            font-size: 22px;
            text-align: center;
            flex: 3;
          `}
        >
          {employee ? `Update ${employee?.username}` : "Create Employee"}
        </Text>

        <IconButton>
          <AiOutlineClose
            className={css`
              flex: 1;
              position: absolute !important;
              top: 0px;
              right: 8px;
            `}
            aria-label="close"
            onClick={() => setOpenForm(false)}
            color="black"
          />
        </IconButton>
      </Flex>

      <Divider light={false}></Divider>

      <DialogContent
        className={css`
          padding: 30px 20px !important;
        `}
      >
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Flex
            className={css`
              flex-direction: column;
              gap: 15px;
              width: 500px;
              padding-top: 20px important;
            `}
          >
            <TextField
              inputProps={{
                required: true,
              }}
              name="username"
              variant="outlined"
              label="Username"
              fullWidth
              value={employeeData.username}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, username: e.target.value })
              }
            />
            <TextField
              inputProps={{
                required: true,
                type: "email",
              }}
              name="email"
              variant="outlined"
              label="Email"
              fullWidth
              value={employeeData.email}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, email: e.target.value })
              }
            />
            <TextField
              inputProps={{
                required: true,
              }}
              name="role"
              variant="outlined"
              label="Role"
              fullWidth
              value={employeeData.role}
              onChange={(e) =>
                setEmployeeData({ ...employeeData, role: e.target.value })
              }
            />
            <TextField
              inputProps={{
                required: true,
                type: "tel",
              }}
              name="phoneNumber"
              variant="outlined"
              label="Phone Number"
              fullWidth
              value={employeeData.phoneNumber}
              onChange={(e) =>
                setEmployeeData({
                  ...employeeData,
                  phoneNumber: e.target.value,
                })
              }
            />

            <Box>
              <FileBase
                className={css`
                  color: red;
                  background: red;
                  font-size: 20px;
                `}
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setEmployeeData({ ...employeeData, imageFile: base64 })
                }
              />
            </Box>
            {errorMessage ? (
              <Box
                className={css`
                  color: red;
                `}
              >
                {errorMessage}
              </Box>
            ) : (
              ""
            )}
            <Button
              className={css`
                background: #131e61 !important;
                color: white !important;
                font-size: 20px !important;
              `}
              type="submit"
              fullWidth
            >
              {employee ? "Update" : "Create"}
            </Button>
          </Flex>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeForm;
