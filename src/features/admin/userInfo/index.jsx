import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoAction } from "../action";

function UserInfo() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("user");
  console.log(id);
  const fetchUserInfo = () => {
    dispatch(fetchUserInfoAction(id));
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return <div>UserInfo</div>;
}

export default UserInfo;
