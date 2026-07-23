import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTestResult } from "../../../redux/actions/studentActions";

import Body from "./Body";

const TestResult = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTestResult(
        user.result.department,
        user.result.year,
        user.result.section
      )
    );
  }, [dispatch]);
  return <Body />;
};

export default TestResult;
