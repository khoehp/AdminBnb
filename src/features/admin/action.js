import instance from "../../api/instance";
export const SET_USER = "admin/SET_USER";
export const SET_ROOM = "admin/SET_ROOM";
export const SET_ROOMINFO = "admin/SET_ROOMINFO";
export const SET_USERINFO = "admin/SET_USERINFO";
const token = localStorage.getItem("token");
console.log(token);
export const fetchUserAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/users",
      method: "GET",
    });
    dispatch({
      type: SET_USER,
      payload: res.data.content,
    });
    console.log(res.data.content);
    return res.data.content;
  } catch (err) {
    console.log("errr", err);
  }
};

export const fetchAddAdmin = async (user) => {
  try {
    const res = await instance.request({
      url: "/api/users",
      method: "POST",
      data: user,
    });
    alert("Thêm quản trị thành công");
  } catch (err) {
    alert(`Thêm quản trị thất bại ! ${err.response.data.content} `);
  }
};
export const fetchUpdataUser = async (id, user) => {
  try {
    const res = await instance.request({
      url: `/api/users/${id}`,
      method: "PUT",
      data: user,
    });
    alert("Chỉnh sửa thành công");
  } catch (err) {
    alert(`Chỉnh sửa thất bại ! ${err.response.data.content} `);
  }
};

export const fetchDeleteUser = async (Id) => {
  try {
    const res = await instance.request({
      url: "/api/users",
      method: "DELETE",
      params: {
        id: Id,
      },
    });
    console.log(res);
    alert("Xóa tài khoản thành công");
  } catch (err) {
    alert(`Xóa tài khoản thất bại !  ${err.response.data.content}`);
  }
};

export const fetchRoomAction = (config, cb) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/phong-thue/phan-trang-tim-kiem",
        method: "GET",
        params: {
          pageIndex: config.currentPage,
          pageSize: config.pageSize,
        },
      });
      cb(res.data.content.totalCount);
      dispatch({
        type: SET_ROOM,
        payload: res.data.content,
      });
      console.log(res.data.content);
    } catch (err) {}
  };
};

export const fetchDeleteRoom = async (id) => {
  try {
    const res = await instance.request({
      url: `/api/phong-thue/${id}`,
      method: "DELETE",
      headers: { token },
    });
    console.log(res);
    alert("Xóa thành công");
  } catch (err) {
    alert(`Xóa thất bại !!! `);
  }
};

export const fetchEditRoomAction = async (id, infoRoom) => {
  try {
    const res = await instance.request({
      url: `/api/phong-thue/${id}`,
      method: "PUT",
      data: infoRoom,
      // headers: { token },
    });
    console.log(res);
    alert("Chỉnh sửa thành công");
  } catch (err) {
   console.log(err);
  }
};

export const fetchCreatRoomAction = async (data) => {
  try {
    const res = await instance.request({
      url: "/api/phong-thue",
      method: "POST",
      data: data,
      headers: { token },
    });
    alert("Thêm phòng thành công");
  } catch (err) {
    alert("Thêm phòng thất bại");
  }
};

export const fetchRoomInfoAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/phong-thue/${id}`,
        method: "GET",
      });
      dispatch({
        type: SET_ROOMINFO,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchUserInfoAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/users/${id}`,
        method: "GET",
      });
      dispatch({
        type: SET_USERINFO,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
