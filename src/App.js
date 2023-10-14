import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import styled from "styled-components";
import ReactGA from "react-ga";
import React from "react";
import GlobalStyles from "./widgets/GlobalStyle";
import { getCookie } from "./widgets/Cookies";
import Settings from "./routes/Settings";
import Profile from "./routes/Profile";
import APITest from "./routes/APITest";
import Privacy from "./routes/Privacy";
import Cookies from "./routes/Cookies";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import WebSocketTest from "./routes/WebSocketTest";
import Popup from "./routes/Popup";
import Chats from "./routes/Chats";
import Home from '../src/routes/Home';
import Chat from "./routes/Chat";

if (!localStorage.getItem("language")) localStorage.setItem("language", "es");

ReactGA.initialize("G-TRE1XPRC29");
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <BrowserRouter history={history}  basename="/michiapp">
        <Switch>
          <Route path="/apitest">
            <APITest />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/cookies">
            <Cookies />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/profile/:userId">
            <Profile />
          </Route>
          <Route path="/test">
            <WebSocketTest />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Login />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
      {!getCookie("consent") && <Popup />}
    </AppContainer>
  );
}

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
