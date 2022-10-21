import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchEditRoomAction } from "../action";
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 8,
  },
};
function Address() {
  const history = useHistory();
  const dispatch = useDispatch();
  const roomLocal = JSON.parse(localStorage.getItem("room"));
  console.log(roomLocal);
  const token = localStorage.getItem("token");
  const rooms = {
    tenPhong: roomLocal.tenPhong,
    khach: roomLocal.khach,
    phongNgu: roomLocal.phongNgu,
    giuong: roomLocal.giuong,
    phongTam: roomLocal.phongTam,
    moTa: roomLocal.moTa,
    giaTien: roomLocal.giaTien,
    mayGiat: roomLocal.mayGiat,
    banLa: roomLocal.banLa,
    tivi: roomLocal.tivi,
    dieuHoa: roomLocal.dieuHoa,
    wifi: roomLocal.wifi,
    bep: roomLocal.bep,
    doXe: roomLocal.doXe,
    hoBoi: roomLocal.hoBoi,
    banUi: roomLocal.banUi,
    maViTri: roomLocal.maViTri,
    hinhAnh: roomLocal.hinhAnh,
  };
  const info = useSelector((state) => state.admin.rooms.data);
  console.log(info);
  const fetcEditRoom = async (id) => {
    await fetchEditRoomAction(id, token);
  };
  // const handleChange = (e) => {
  //   SetRooms({ ...rooms, [e.target.name]: e.target.value });
  //   console.log(e.target.value);
  // };
  const handleSubmit = (values) => {
    const rooms = { ...values };
    fetcEditRoom();
    history.push("/room");
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <h1 className="text-center text-2xl">Chỉnh sửa thông tin phòng</h1>
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
          <Input name="tenPhong" />
        </Form.Item>
        <Form.Item label="Số người" name="khach">
          <InputNumber name="khach" />
        </Form.Item>
        <Form.Item label="Phòng ngủ" name="phongNgu">
          <InputNumber name="phongNgu" />
        </Form.Item>
        <Form.Item label="Phòng tắm" name="phongTam">
          <InputNumber name="phongTam" />
        </Form.Item>
        <Form.Item label="Mô tả" name="moTa">
          <Input name="moTa" />
        </Form.Item>
        <Form.Item label="Giá tiền" name="giaTien">
          <InputNumber name="giaTien" />
        </Form.Item>
        <Form.Item label="Máy giặt" name="mayGiat">
          <Select name="mayGiat">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn là" name="banLa">
          <Select name="banLa">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tivi" name="tivi">
          <Select name="tivi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Điều hòa" name="dieuHoa">
          <Select name="dieuHoa">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Wfi" name="wifi">
          <Select name="wifi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bếp" name="bep">
          <Select name="bep">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Đỗ xe" name="doXe">
          <Select name="doXe">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Hồ bơi" name="hoBoi">
          <Select name="hoBoi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn ủi" name="banUi">
          <Select name="banUi">
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Mã vị trí" name="maViTri">
          <InputNumber name="maViTri" />
        </Form.Item>
        <Form.Item label="Hình ảnh" name="hinhAnh">
          <Input name="hinhAnh" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Button
        </Button>
      </Form>
    </div>
  );
}

export default Address;
