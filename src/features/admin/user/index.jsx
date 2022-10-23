import React from "react";
import { Button, Space, Table } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserAction, fetchDeleteUser } from "../action";
import styles from "./style.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function User() {
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.admin.user);

  const fetch = async () => {
    await dispatch(fetchUserAction);
  };
  useEffect(() => {
    fetch();
  }, []);
  
  const deteleUser = async (Id) => {
    await fetchDeleteUser(Id);
    fetch();
  };
  const UserInfo = (users) => {
    localStorage.setItem("user", JSON.stringify(users));
    history.push("/userInfo");
  };
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Birthday",
      key: "birthday",
      dataIndex: "birthday",
    },
    {
      title: "Action",
      key: "action",
      render: (_, userInfo) => {
        return (
          <div className={styles.icons}>
            <Button
              type="text"
              style={{ color: "blue" }}
              onClick={() =>
                
                history.push(`/user/editUser/${userInfo.id}`)}
              icon={<EditOutlined />}
              className={styles.icon}
            ></Button>
            <Button
              type="text"
              className={styles.icon}
              onClick={() => deteleUser(userInfo.id)}
              style={{ color: "red" }}
              icon={<DeleteOutlined />}
            ></Button>
            <Button
              type="text"
              className={styles.icon}
              onClick={() => UserInfo(userInfo.id)}
              style={{ color: "blue" }}
            >
              Chi tiết
            </Button>
          </div>
        );
      },
    },
  ];
 
  const data = (arr) => {
    let users = [];
    arr.forEach((user, index, array) => {
      users.push({ ...user, key: index });
    });
    return users;
  };
  const gotoAddUser = () => {
    history.push("/user/addUser");
  };
  return (
    <>
      <Button
        type="primary"
        style={{ marginBottom: "10px", color: "green" }}
        onClick={gotoAddUser}
      >
        Add new ADMIN
      </Button>
      <Table columns={columns} dataSource={data(userInfo)} />;
    </>
  );
}

export default User;
