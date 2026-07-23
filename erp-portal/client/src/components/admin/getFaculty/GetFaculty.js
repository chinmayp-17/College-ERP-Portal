import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDepartment } from "../../../redux/actions/adminActions";
import Body from "./Body";

const GetFaculty = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return <Body />;
};

export default GetFaculty;
