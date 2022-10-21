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
    console.log("aaa");
  };
  useEffect(() => {
    fetch();
  }, []);
  const editUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    history.push("/user/addUser");
  };
  const deteleUser = async (Id) => {
    await fetchDeleteUser(Id);
    fetch();
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
              onClick={() => editUser(userInfo)}
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
          </div>
        );
      },
    },
  ];
  // const data = [
  //   {
  //     id: "1",

  //     name: "John Brown",
  //     age: 32,
  //     email: "New York No. 1 Lake Park",
  //     tags: "developer",
  //   },
  //   {
  //     id: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     email: "London No. 1 Lake Park",
  //     tags: "developer",
  //   },
  //   {
  //     id: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     email: "Sidney No. 1 Lake Park",
  //     tags: "developer",
  //   },
  // ];
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
