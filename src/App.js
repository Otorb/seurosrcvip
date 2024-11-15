import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Admin from "./Components/Admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/formulario" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
