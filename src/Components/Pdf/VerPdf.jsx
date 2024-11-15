import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import DocuPfd from './DocuPfd';

function VerPdf() {
  return (
    <PDFViewer style={{ width: "100%", height: "90vh" }}>
        <DocuPfd/>
      </PDFViewer>
  )
}

export default VerPdf