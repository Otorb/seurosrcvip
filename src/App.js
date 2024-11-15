import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import VerPdf from "./Components/Pdf/VerPdf";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/formulario" element={<VerPdf />} />
      </Routes>
    </div>
  );
}

export default App;
