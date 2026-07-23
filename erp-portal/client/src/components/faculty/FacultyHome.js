import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNotice } from "../../redux/actions/adminActions";
import Body from "./Body";

const FacultyHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);
  return <Body />;
};

export default FacultyHome;
