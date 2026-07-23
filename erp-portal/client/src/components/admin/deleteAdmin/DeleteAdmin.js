import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDepartment } from "../../../redux/actions/adminActions";
import Body from "./Body";

const DeleteAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDepartment());
  }, [dispatch]);
  return <Body />;
};

export default DeleteAdmin;
