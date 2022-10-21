import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <Menu className="bg-blue-500"
      style={{
        width: "100%",
       
        color: "#fff",
      }}
      mode="inline"
      theme="dark"
      items={[
        {
          label: ` Air Bnb`,
          key: "logo",
        },
        {
          label: "Quản lý người dùng",
          key: "user",
          children: [
            {
              label: <NavLink to="/users">Management User</NavLink>,
              key: "user",
            },
          ],
        },
        {
          label: "Quản lý phòng",
          key: "rooms",
          children: [
            {
              label: <NavLink to="/address">Quản lý phòng</NavLink>,
              key: "address",
            },
            {
              label: <NavLink to="/roomInfo">Thêm phòng</NavLink>,
              key: "roomInfo",
            },
            {
              label: <NavLink to="/">Thông tin phòng</NavLink>,
              key: "room",
            },
          ],
        },
      ]}
    ></Menu>
  );
}

export default Home;
