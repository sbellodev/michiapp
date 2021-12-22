import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./widgets/GlobalStyle";
import { createBrowserHistory } from "history";
import { getCookie } from "./widgets/Cookies";
import Settings from "./routes/Settings";
import Profile from "./routes/Profile";
import APITest from "./routes/APITest";
import Privacy from "./routes/Privacy";
import Cookies from "./routes/Cookies";
import styled from "styled-components";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import Popup from "./routes/Popup";
import Chats from "./routes/Chats";
import Home from "./routes/Home";
import Chat from "./routes/Chat";
import ReactGA from "react-ga";
import React from "react";

if (!localStorage.getItem("language")) localStorage.setItem("language", "es");

ReactGA.initialize("G-Y5B8CQNNTD");
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

const App = () => {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter history={history}>
        {/* <Navbar>
            <NavLink to="/michiapp/" exact name="login" >Login</NavLink>
            <NavLink to="/michiapp/signup" exact name="signup" >Signup</NavLink>
            <NavLink to="/michiapp/home" exact name="home" activeClassName="active">Home</NavLink>
            <NavLink to="/michiapp/chats" exact name="chats" >Chats</NavLink>
            <NavLink to="/michiapp/chat" exact name="chat" >Chat</NavLink>
            <NavLink to="/michiapp/settings" exact name="settings" >Settings</NavLink>
            <NavLink to="/michiapp/profile" exact name="profile" >Profile</NavLink>
            <NavLink to="/michiapp/apitest" exact name="apitest" >APITest</NavLink>
        </Navbar> */}
        <Switch>
          <Route path="/michiapp/apitest">
            <APITest />
          </Route>
          <Route path="/michiapp/privacy">
            <Privacy />
          </Route>
          <Route path="/michiapp/cookies">
            <Cookies />
          </Route>
          <Route path="/michiapp/chats">
            <Chats />
          </Route>
          <Route path="/michiapp/chat">
            <Chat />
          </Route>
          <Route path="/michiapp/settings">
            <Settings />
          </Route>
          <Route path="/michiapp/profile/:user_id">
            <Profile />
          </Route>
          <Route path="/michiapp/home">
            <Home />
          </Route>
          <Route path="/michiapp/signup">
            <Signup />
          </Route>
          <Route path="/michiapp">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
      {!getCookie("consent") && <Popup />}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  background: var(--main-bg-color);
`;

// const Navbar = styled.nav`
//     display: flex;
//     justify-content: space-evenly;
// `
export default App;
