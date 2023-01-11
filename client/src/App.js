import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getEmployees } from "./actions/employees";
import HomePage from "./pages/HomePage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return <HomePage />;
};

export default App;
