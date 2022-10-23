// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { fetchAddAdmin, fetchUpdataUser, fetchUserInfoAction } from "../action";
import { Button, DatePicker, Form, Radio, Select, Input } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
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
function AddUser() {
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchUserInfoAction(userId));
  // }, [userId]);

  const handelSubmit = (value) => {
    dispatch(fetchAddAdmin(value));
    // localStorage.removeItem("user");
    history.push("/users");
  };

  const [componentSize, setComponentSize] = useState("default");
  return (
    <div>
      <h1 className="text-center text-3xl">Add User</h1>
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
