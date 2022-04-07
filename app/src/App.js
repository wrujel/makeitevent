import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Home, NotFound, CreateEvent, EditEvent } from "./pages/index";
import {
  Login,
  Register,
  Profile,
  Footer,
  Navigation,
} from "./components/index";

import { history } from "./helpers/history";
import { clearMessage } from "./actions/message";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  return (
    <BrowserRouter history={history}>
      <Navigation />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/event/create" element={<CreateEvent />} />
        <Route path="/event/edit/:id" element={<EditEvent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
