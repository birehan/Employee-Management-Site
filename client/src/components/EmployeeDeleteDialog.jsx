import React from "react";
import { useDispatch } from "react-redux";
import { Flex, Text } from "rebass";
import {
  Button,
  Dialog,
  IconButton,
  Divider,
  DialogContent,
} from "@material-ui/core";

import { deleteEmployee } from "../actions/employees.js";

import { AiOutlineClose } from "react-icons/ai";
import { css } from "@emotion/css";

const EmployeeDeleteDialog = ({ openForm, setOpenForm, employee }) => {
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    dispatch(deleteEmployee(employee._id));
    setOpenForm(false);
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
            font-weight: 500;
            font-size: 20px;
            text-align: center;
            flex: 3;
            color: red;
          `}
        >
          Delete Employee {employee?.username}
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
        <Flex
          className={css`
            flex-direction: row;
            gap: 30px;
            justify-content: space-between;
            width: 400px;
            padding-top: 20px important;
          `}
        >
          <Button
            onClick={handleSubmit}
            className={css`
              background: red !important;
              color: white !important;
              font-size: 20px !important;
            `}
            type="submit"
            fullWidth
          >
            Delete
          </Button>
          <Button
            onClick={() => setOpenForm(false)}
            className={css`
              background: green !important;
              color: white !important;
              font-size: 20px !important;
            `}
            type="submit"
            fullWidth
          >
            Cancel
          </Button>
        </Flex>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeDeleteDialog;
