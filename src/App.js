import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Admin from "./Components/Admin/Admin";
import DocuPfd from "./Components/Pdf/DocuPfd";
import VerPdf from "./Components/Pdf/VerPdf";
import Prueba from "./Components/Pdf2/Prueba";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/formulario" element={<Admin />} />
        <Route exact path="/pdf" element={<VerPdf />} />
        {/* <Route exact path="/ruta" element={<Prueba />} /> */}
      </Routes>
    </div>
  );
}

export default App;
