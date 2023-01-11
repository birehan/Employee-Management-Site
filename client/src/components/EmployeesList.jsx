import React from "react";
import { Flex } from "rebass";
import { css } from "@emotion/css";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import { useSelector } from "react-redux";

const Employees = () => {
  const { employees } = useSelector((state) => state.employees);

  return (
    <Flex
      className={css`
        margin-top: 20px !important;
        flex-wrap: wrap;
        gap: 30px;
        height: 60vh;
        overflow-y: scroll;
        justify-content: start;
      `}
    >
      {employees?.map((employee, index) => {
        return <EmployeeCard key={index} employee={employee} />;
      })}
    </Flex>
  );
};

export default Employees;
