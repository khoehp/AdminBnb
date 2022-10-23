import { Button, Form, Input, InputNumber, Radio, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { fetchEditRoomAction, fetchRoomInfoAction } from "../action";
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

  const match = useRouteMatch();
  const [form] = Form.useForm();

  const roomId = match.params.id;

  const roomLocal = useSelector((state) => state.admin.roomInfo);
  console.log(roomLocal);

  useEffect(() => {
    dispatch(fetchRoomInfoAction(roomId));
  }, [roomId]);

  useEffect(() => {
    if (roomLocal?.tenPhong) {
      form.setFieldValue({ ...roomLocal });
    }
  }, [roomLocal?.tenPhong]);

  const info = useSelector((state) => state.admin.rooms.data);

  const handleSubmit = (values) => {
    values = { ...values };
    console.log(values);
    dispatch(fetchEditRoomAction(roomId, values))
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
        form={form}
        onFinish={handleSubmit}
        onValuesChange={onFormLayoutChange}
        initialValues={{}}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phòng" name="tenPhong">
          <Input  />
        </Form.Item>
        <Form.Item label="Số người" name="khach">
          <InputNumber  />
        </Form.Item>
        <Form.Item label="Phòng ngủ" name="phongNgu">
          <InputNumber  />
        </Form.Item>
        <Form.Item label="Phòng tắm" name="phongTam">
          <InputNumber  />
        </Form.Item>
        <Form.Item label="Mô tả" name="moTa">
          <Input  />
        </Form.Item>
        <Form.Item label="Giá tiền" name="giaTien">
          <InputNumber  />
        </Form.Item>
        <Form.Item label="Máy giặt" name="mayGiat">
          <Select>
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn là" name="banLa">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tivi" name="tivi">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Điều hòa" name="dieuHoa">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Wfi" name="wifi">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bếp" name="bep">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Đỗ xe" name="doXe">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Hồ bơi" name="hoBoi">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bàn ủi" name="banUi">
          <Select >
            <Select.Option value="true">Có</Select.Option>
            <Select.Option value="false">Không</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Mã vị trí" name="maViTri">
          <InputNumber  />
        </Form.Item>
        <Form.Item label="Hình ảnh" name="hinhAnh">
          <Input  />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Button
        </Button>
      </Form>
    </div>
  );
}

export default Address;
