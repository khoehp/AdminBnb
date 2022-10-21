import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { fetchCreatRoomAction } from "../action";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

function RoomInfo() {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const disptach = useDispatch();
  const [rooms, SetRooms] = useState({
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 0,
    mayGiat: true,
    banLa: true,
    tivi: true,
    dieuHoa: true,
    wifi: true,
    bep: true,
    doXe: true,
    hoBoi: true,
    banUi: true,
    maViTri: 0,
    hinhAnh: "",
  });

  const handleChange = (e) => {
    SetRooms({ ...rooms, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const handleSubmit = (values) => {
    fetchCreatRoomAction(rooms, token);
    history.push("/room");
  };





  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Form
        {...layout}
        layout="horizontal"
        initialValues={rooms}
        onFinish={handleSubmit}
        onValuesChange={onFormLayoutChange}
        // size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phòng" name="tenPhong">
          <Input onChange={handleChange} name="tenPhong" />
        </Form.Item>
        <Form.Item label="Số người" name="khach">
          <InputNumber onChange={handleChange} name="khach" />
        </Form.Item>
        <Form.Item label="Phòng ngủ" name="phongNgu">
          <InputNumber onChange={handleChange} name="phongNgu" />
        </Form.Item>
        <Form.Item label="Phòng tắm" name="phongTam">
          <InputNumber onChange={handleChange} name="phongTam" />
        </Form.Item>
        <Form.Item label="Mô tả" name="moTa">
          <Input onChange={handleChange} name="moTa" />
        </Form.Item>
        <Form.Item label="Giá tiền" name="giaTien">
          <InputNumber onChange={handleChange} name="giaTien" />
        </Form.Item>
        <Form.Item label="Máy giặt" name="mayGiat">
          <Select onChange={handleChange} name="mayGiat">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn là" name="banLa">
          <Select onChange={handleChange} name="banLa">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tivi" name="tivi">
          <Select onChange={handleChange} name="tivi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Điều hòa" name="dieuHoa">
          <Select onChange={handleChange} name="dieuHoa">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Wfi" name="wifi">
          <Select onChange={handleChange} name="wifi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bếp" name="bep">
          <Select onChange={handleChange} name="bep">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Đỗ xe" name="doXe">
          <Select onChange={handleChange} name="doXe">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Hồ bơi" name="hoBoi">
          <Select onChange={handleChange} name="hoBoi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn ủi" name="banUi">
          <Select onChange={handleChange} name="banUi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Mã vị trí" name="maViTri">
          <InputNumber onChange={handleChange} name="maViTri" />
        </Form.Item>
        <Form.Item label="Hình ảnh" name="hinhAnh">
          <Input onChange={handleChange} name="hinhAnh" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Button
        </Button>
      </Form>
    </div>
  );
}

export default RoomInfo;
