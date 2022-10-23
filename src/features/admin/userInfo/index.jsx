import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfoAction } from "../action";

function UserInfo() {
  const dispatch = useDispatch();
  const id = localStorage.getItem("user");
  console.log(id);
  const user = useSelector((state) => state.admin.userInfo);
  const fetchUserInfo = () => {
    dispatch(fetchUserInfoAction(id));
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold ">
        Thông tin người dùng
      </h1>
      <div className="px-96 text-lg py-5">
        <h1>id: {user?.id}</h1>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.emai}</p>
        <p>Phone: {user?.phone}</p>
        <p>Birthday: {user?.birthday}</p>
        <img src={user?.avata} />
        <p>Giới tính: {user ? "Nam" : "Nữ"}</p>
        <p>Role: {user?.role}</p>
      </div>
    </div>
  );
}

export default UserInfo;
