import { Button, DatePicker, Form, Radio, Select, Input } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchAddAdmin, fetchUpdataUser } from "../action";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function AddAdmin() {
  const history = useHistory();
  const userLocal = JSON.parse(localStorage.getItem("user"));

  const users = {
    email: userLocal === null ? "" : userLocal.email,
    name: userLocal === null ? "" : userLocal.name,
    phone: userLocal === null ? "" : userLocal.phone,
    birthday: userLocal === null ? "" : userLocal.birthday,
    gender: userLocal === null ? "" : userLocal.gender,
    role: userLocal === null ? "" : userLocal.role,
  };

  const renderButton = () => {
    if (!userLocal) {
      return (
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      );
    }
    return (
      <Button type="primary" htmlType="submit">
        Update
      </Button>
    );
  };

  const handelSubmit = (values) => {
    const user = { ...values };
    if (!userLocal) {
      fetchAddAdmin(user);
      history.push("/users");
    } else {
      fetchUpdataUser(userLocal.id);
      localStorage.removeItem("user");
      history.push("/users");
    }
  };
  const [componentSize, setComponentSize] = useState("default");
  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };
  return (
    <div>
      <h1>{userLocal === null ? "Add User" : "Update User"}</h1>
      <Form
        {...layout}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        // onValuesChange={onFormLayoutChange}
        onFinish={handelSubmit}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập email",
            },
            { whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên",
            },
            { whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
            { whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="password"
          name="password"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu",
            },
            { whitespace: true },
          ]}
        >
          <Input></Input>
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn",
            },
            { whitespace: true },
          ]}
        >
          <Select placeholder="User type" allowClear>
            <Select.Option value="true">Nam</Select.Option>
            <Select.Option value="false">Nữ</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn",
            },
            { whitespace: true },
          ]}
        >
          <Select placeholder="User type" allowClear>
            <Select.Option value="ADMIN">ADMIN</Select.Option>
            <Select.Option value="USER">USER</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>{renderButton()}</Form.Item>
      </Form>
    </div>
  );
}

export default AddAdmin;
