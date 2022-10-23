import React from "react";
import { useSelector } from "react-redux";

function Account() {
  const account = useSelector((state) => state.auth.profile);
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold ">
        Thông tin tài khoản
      </h1>
      <div className="px-96 text-lg py-5">
        <h1>id: {account?.id}</h1>
        <p>Name: {account?.name}</p>
        <p>Email: {account?.emai}</p>
        <p>Phone: {account?.phone}</p>
        <p>Birthday: {account?.birthday}</p>
        <img src={account?.avata} />
        <p>Giới tính: {account ? "Nam" : "Nữ"}</p>
        <p>Role: {account.role}</p>
      </div>
    </div>
  );
}

export default Account;
