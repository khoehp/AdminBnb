import Headers from "../common/components/header";
import Home from "../common/components/home";
import { lazy, Suspense } from "react";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthRoute, PrivateRoute } from "./Guard";
import { Layout, Spin } from "antd";
import { useDispatch } from "react-redux";
import { fetchProfileAction } from "../features/authentication/action";
const { Sider, Content, Header, Footer } = Layout;
const Room = lazy(() => import("../features/admin/room"));
const Addroom = lazy(() => import("../features/admin/address"));
const Account = lazy(() => import("../features/admin/account"));
const RoomEdit = lazy(() => import("../features/admin/editRoom"));
const RoomInfo = lazy(() => import("../features/admin/roomInfo"));
const User = lazy(() => import("../features/admin/user"));
const UserInfo = lazy(() => import("../features/admin/userInfo"));
const AddAdmin = lazy(() => import("../features/admin/addAdmin"));
const AddUser = lazy(() => import("../features/admin/addUser"));
const Signin = lazy(() => import("../features/authentication/signin"));
const Signup = lazy(() => import("../features/authentication/signup"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction);
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Header
          style={{
            height: "auto",
            background: "#339999",
          }}
        >
          <Headers />
        </Header>
        <Layout>
          <Sider style={{ width: "auto", marginRigh: "10px" }}>
            <Home />
          </Sider>
          <Content style={{ margin: "10px" }}>
            <Suspense
              fallback={
                <div style={{ textAlign: "center" }}>
                  <Spin size="large" />
                </div>
              }
            >
              <Switch>
                <Route path="/custom" component={Signin}></Route>
                <PrivateRoute
                  path="/"
                  component={Room}
                  redirectPath="/"
                  exact
                />
                  <PrivateRoute
                  path="/account"
                  component={Account}
                  redirectPath="/"
                />
                <PrivateRoute path="/users" component={User} redirectPath="/" />
                <PrivateRoute path="/user/addUser" component={AddUser} redirectPath="/" />
                <PrivateRoute
                  path="/user/editUser/:id"
                  component={AddAdmin}
                  redirectPath="/"
                  exact
                />
                <PrivateRoute
                  path="/userInfo"
                  component={UserInfo}
                  redirectPath="/"
                />
                <Route
                  path="/roomEdit/:id"
                  component={Addroom}
                  redirectPath="/"
                />
                <PrivateRoute
                  path="/addRoom"
                  component={RoomEdit}
                  redirectPath="/"
                />
                <PrivateRoute
                  path="/roomInfo"
                  component={RoomInfo}
                  redirectPath="/"
                />
                <AuthRoute path="/signin" component={Signin} redirectPath="/" />
                <AuthRoute path="/signup" component={Signup} redirectPath="/" />
                {/* <Redirect to="/" /> */}
              </Switch>
            </Suspense>
          </Content>
        </Layout>
        <Footer></Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
