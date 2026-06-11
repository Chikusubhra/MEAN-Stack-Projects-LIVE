import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./Store.jsx";
import Mac from "./Mac.jsx";
import Ipad from "./Ipad.jsx";
import Iphone from "./Iphone.jsx";
import AirPods from "./AirPods.jsx";
import TvHome from "./TvHome.jsx";
import Entertaintement from "./Entertaintement.jsx";
import Accessories from "./Accessories.jsx";
import Support from "./Support.jsx";
import NavBar from "./NavBar.jsx";

const App = () => {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store/>}/>
          <Route path="/mac" element={<Mac/>}/>
          <Route path="/ipad" element={<Ipad/>}/>
          <Route path="/iphone" element={<Iphone/>}/>
          <Route path="/airpods" element={<AirPods/>}/>
          <Route path="/tvhome" element={<TvHome/>}/>
          <Route path="/entertaintement" element={<Entertaintement/>}/>
          <Route path="/accessories" element={<Accessories/>}/>
          <Route path="/support" element={<Support/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
