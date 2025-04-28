import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar";
import User from "./Pages/User";
import Service from "./Pages/Service";
import StudentAdd from "./Pages/StudentAdd";
import StudentEdit from "./Pages/StudentEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user/:abc" element={<User />} />
        <Route path="/service" element={<Service />}>
        <Route path="add" element={<StudentAdd />} />
        <Route path="edit" element={<StudentEdit />} />
        </Route>
     
      
        <Route path="*" element={<>page not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
