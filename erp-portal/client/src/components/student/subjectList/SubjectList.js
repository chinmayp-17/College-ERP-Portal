import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSubject } from "../../../redux/actions/studentActions";

import Body from "./Body";

const SubjectList = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubject(user.result.department, user.result.year));
  }, [dispatch]);
  return <Body />;
};

export default SubjectList;
