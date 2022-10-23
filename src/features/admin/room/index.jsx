import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteRoom, fetchRoomAction } from "../action";
import styles from "./style.module.css";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
function Room() {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const [config, setConfig] = useState({
    currentPage: 1,
    pageSize: 100,
    totalCount: 0,
  });
  const changeTotalCount = (total) => {
    setConfig({ ...config, totalCount: total });
  };

  const rooms = useSelector((state) => state.admin.rooms.data);
  // console.log("rooms", rooms);

  const fetchRoom = () => {
    dispatch(fetchRoomAction(config, changeTotalCount));
  };

  const deleteRoom = async (id) => {
    await fetchDeleteRoom(id, token);
    // dispatch(fetchRoomAction);
    fetchRoom();
  };

  // const editRooms = (rooms) => {
  //   localStorage.setItem("room", JSON.stringify(rooms));
  //   // history.push(`/roomEdit/${id}`);
  // };

  const RoomInfo = (rooms) => {
    localStorage.setItem("room", JSON.stringify(rooms));
    history.push("/roomInfo");
  };

  useEffect(() => {
    fetchRoom();
  }, []);
  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: "Tên phòng",
      dataIndex: "tenPhong",
      key: "tenPhong",
      width: "20%",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "26%",
      render: (_, item) => {
        return (
          <>
            <img className={styles.img} src={item.hinhAnh} />
          </>
        );
      },
    },
    {
      title: "Vị trí",
      key: "vitri",
      dataIndex: "maViTri",
      witdh: "20%",
    },
    {
      title: "Số người",
      key: "khach",
      dataIndex: "khach",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      render: (_, rooms) => {
        return (
          <div className={styles.icons}>
            <Button
              className={styles.icon}
              type="text"
              style={{ color: "blue" }}
              onClick={() => {
                history.push(`/roomEdit/${rooms.id}`)
              }}
              icon={<EditOutlined />}
            ></Button>
            <Button
              className={styles.icon}
              type="text"
              onClick={() => deleteRoom(rooms.id)}
              style={{ color: "red" }}
              icon={<DeleteOutlined />}
            ></Button>
            <Button
              className={styles.icon}
              type="text"
              onClick={() => RoomInfo(rooms.id)}
              style={{ color: "blue" }}
            >
              Xem chi tiết
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={rooms?.map((item, index) => {
          return { ...item, key: index };
        })}
      />
      ;
    </>
  );
}

export default Room;
