import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoomInfoAction } from "../action";

function RoomInfo() {
  const id = localStorage.getItem("room");

  const dispatch = useDispatch();
  const fetchRoomInfo = () => {
    dispatch(fetchRoomInfoAction(id));
  };
  const roomInfo = useSelector((state) => state.admin.roomInfo);
  console.log(roomInfo);
  useEffect(() => {
    fetchRoomInfo();
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl text-blue-600">Thông tin phòng</h1>
      <div className="px-80 font-semibold text-lg">
        <div className=" flex py-5">
          <p className="px-28">id: {roomInfo?.id}</p>
          <p>Mã vị trí: {roomInfo?.maViTri} </p>
        </div>
        <h3 className="py-2">Tên phòng: {roomInfo?.tenPhong}</h3>
        <img className="py-2" src={roomInfo?.hinhAnh} />
        <p className="py-2">Mô tả: {roomInfo?.moTa}</p>
        <div className="grid grid-cols-3 py-2">
          <p>Khách: {roomInfo?.khach} </p>
          <p>Phòng ngủ: {roomInfo?.phongNgu}</p>
          <p>Phòng tắm: {roomInfo?.phongTam}</p>
          <p>Giường: {roomInfo?.giuong}</p>
          <p>Giá tiền: {roomInfo?.giaTien}</p>
          <p>Máy giặt: {roomInfo ? "Có" : "Không"}</p>
          <p>Bàn là: {roomInfo ? "Có" : "Không"}</p>
          <p>Ti vi: {roomInfo ? "Có" : "Không"}</p>
          <p>Điều hòa: {roomInfo ? "Có" : "Không"}</p>
          <p>Wifi: {roomInfo ? "Có" : "Không"}</p>
          <p>Bếp : {roomInfo ? "Có" : "Không"}</p>
          <p>Đỗ xe: {roomInfo ? "Có" : "Không"}</p>
          <p>Hồ bơi: {roomInfo ? "Có" : "Không"}</p>
          <p>Bàn ủi: {roomInfo ? "Có" : "Không"}</p>
        </div>
      </div>
    </div>
  );
}

export default RoomInfo;
