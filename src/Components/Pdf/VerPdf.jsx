import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import DocuPfd from './DocuPfd';

function VerPdf() {
  const [data, setData] = React.useState(JSON.parse(localStorage.getItem("formData")));

  // React.useEffect(() => {
  //   // Recuperar los datos del localStorage
  //   const storedData = JSON.parse(localStorage.getItem("formData"));
  //   console.log(storedData, "storedData");
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);
  console.log( "data",data);
  
  return (
    <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <DocuPfd props={data}  />
      </PDFViewer>
  )
}

export default VerPdf