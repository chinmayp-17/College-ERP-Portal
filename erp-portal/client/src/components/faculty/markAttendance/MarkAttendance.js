import React, { useEffect } from "react";
import Body from "./Body";
import { useDispatch } from "react-redux";
import {
  getAllDepartment,
  getAllSubject,
} from "../../../redux/actions/adminActions";

const MarkAttendance = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return <Body />;
};

export default MarkAttendance;
