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
          key: "users",
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
              label: <NavLink to="/">Quản lý phòng</NavLink>,
              key: "room",
            },
            {
              label: <NavLink to="/addRoom">Thêm phòng</NavLink>,
              key: "addRoom",
            },
            {
              label: <NavLink to="/roomInfo">Thông tin phòng</NavLink>,
              key: "roomInfo",
            },
          ],
        },
      ]}
    ></Menu>
  );
}

export default Home;
