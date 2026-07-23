import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAttendance } from "../../../redux/actions/studentActions";

import Body from "./Body";

const Attendance = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAttendance(
        user.result.department,
        user.result.year,
        user.result.section
      )
    );
  }, [dispatch]);
  return <Body />;
};

export default Attendance;
