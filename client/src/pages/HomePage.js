import React, { useState } from "react";
import { Box, Text, Button, Flex } from "rebass";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

import EmployeesList from "../components/EmployeesList.jsx";
import EmployeeForm from "../components/EmployeeForm/EmployeeForm";

import { css } from "@emotion/css";

import * as style from "./style";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [openForm, setOpenForm] = useState(false);
  const { employees } = useSelector((state) => state.employees);

  return (
    <Box css={style.homepageStyle}>
      <Header />
      <NavBar />
      <Box
        className={css`
          grid-row: 2 / 3;
          grid-column: 2 / 3;
          background: white;
          padding: 20px 40px 20px;
          border-radius: 10px;
        `}
      >
        {openForm ? (
          <EmployeeForm openForm={openForm} setOpenForm={setOpenForm} />
        ) : (
          ""
        )}
        {/* Start content people section */}
        <Box
          className={css`
            display: flex;
            align-items: start;
            font-size: 40px;
            font-weight: bold;
            gap: 5px;
          `}
        >
          <Text
            className={css`
              color: #131e61;
            `}
          >
            {" "}
            People{" "}
          </Text>
          <Text
            className={css`
              color: silver;
            `}
          >
            {employees.length}{" "}
          </Text>
        </Box>

        <Flex sx={{ justifyContent: "end", mb: "20px" }}>
          <Button
            onClick={() => setOpenForm(true)}
            css={style.addEmployeeButtonStyle}
          >
            Add a new employee
          </Button>
        </Flex>
        <hr />
        <EmployeesList />
      </Box>
    </Box>
  );
};

export default HomePage;
