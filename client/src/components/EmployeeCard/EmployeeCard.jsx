import React, { useState } from "react";
import { Text, Flex, Card, Image, Link, Box, Button } from "rebass";
import { css } from "@emotion/css";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import EmployeeDeleteDialog from "../EmployeeDeleteDialog";

import { BsPinAngle } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import * as style from "./style";

const EmployeeCard = ({ employee }) => {
  const [openUpdateEmployee, setOpenUpdateEmployee] = useState(false);
  const [openDeleteEmployee, seOpenDeleteEmployee] = useState(false);

  return (
    <Card css={style.cardStyle}>
      {openUpdateEmployee ? (
        <EmployeeForm
          openForm={openUpdateEmployee}
          setOpenForm={setOpenUpdateEmployee}
          employee={employee}
        />
      ) : (
        ""
      )}
      {openDeleteEmployee ? (
        <EmployeeDeleteDialog
          openForm={openDeleteEmployee}
          setOpenForm={seOpenDeleteEmployee}
          employee={employee}
        />
      ) : (
        ""
      )}
      <Flex sx={{ justifyContent: "space-between" }}>
        <BsPinAngle />
        <FiMoreVertical />
      </Flex>

      <Image
        src={employee?.imageFile}
        sx={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />
      <Flex
        className={css`
          flex-direction: column;
          gap: 10px;
        `}
      >
        <Text
          className={css`
            font-size: 20px;
            font-weight: bold;
          `}
        >
          {" "}
          {employee?.username}{" "}
        </Text>
        <Text css={style.emailStyle}>{employee?.role} </Text>
        <Text> {employee?.phoneNumber}</Text>
        <Link
          target="_blank"
          className={css`
            text-decoration: none;
          `}
          href={`mailto:${employee?.email}`}
        >
          {employee.email}
        </Link>

        <hr />
        <Flex
          className={css`
            justify-content: center;
            gap: 20px;
          `}
        >
          <Box
            onClick={() => setOpenUpdateEmployee(true)}
            css={style.editButtonStyle}
          >
            Edit
          </Box>
          <Box
            onClick={() => seOpenDeleteEmployee(true)}
            css={style.deleteButtonStyle}
          >
            Delete
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};

export default EmployeeCard;
