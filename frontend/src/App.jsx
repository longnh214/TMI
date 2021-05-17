import { Container } from "@material-ui/core";
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import ProjectApp from "./pages/project/ProjectApp";
import Application from "./pages/application/Application";
import ApplicationDetail from "./pages/application/ApplicationDetail";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT } from "./redux/user";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logout = () => dispatch(LOG_OUT());

  console.log(user);

  return (
    <>
      {user.isLoggedIn ? (
        <>
          {/* <Redirect to="/project" /> */}
          <Navigation logout={logout} />
          <Container
            style={{
              backgroundColor: "white",
              minHeight: "100vh",
              padding: 10,
            }}
          >
            <div style={{ height: 64 }} />
            {/* <Route path="/" exact component={() => <div>Home</div>} /> */}
            <Route path="/project" exact component={Project} />
            <Route path="/project/:id" component={ProjectApp} />
            <Route path="/app" exact component={Application} />
            <Route path="/app/:id" component={ApplicationDetail} />
            <Route path="/about" component={About} />
          </Container>
        </>
      ) : (
        <Route path="/" component={Login} />
      )}
    </>
  );
}

export default App;
