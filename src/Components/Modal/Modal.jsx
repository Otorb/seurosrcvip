import react, { useState } from "react";

function Modal({ isVisible, onClose, documents }) {
  const [formData, setFormData] = useState({
    cedulaPagador: "",
    telefonoPagador: "",
    fechaPago: "",
    referencia: "",
  });

  const [submitted, setSubmitted] = useState(false);
  if (!isVisible) return null;

  const datosFijos = {
    importe: "120.00",
    bancoOrigen: "0102",
    telefonoDestino: "04127141363",
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const union = Object.assign(datosFijos, formData);
    const datos = JSON.stringify(union);

    console.log("body", datos);

    const myHeaders = new Headers();
    myHeaders.append("X-API-Key", "96R7T1T5J2134T5YFC2GF15SDFG4BD1Z");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      cedulaPagador: "J27037606",
      telefonoPagador: "04127141363",
      telefonoDestino: "04127141363",
      referencia: "123112313",
      fechaPago: "2023-02-12",
      importe: "120.00",
      bancoOrigen: "0102",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(requestOptions.body, "body");

    fetch(
      "https://bdvconciliacionqa.banvenez.com:444/getMovement",
      requestOptions
    )
      .then((response) => response.text())
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  /* const response = await fetch(
          "https://bdvconciliacionqa.banvenez.com:444/getMovement",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": "96R7T1T5J2134T5YFC2GF15SDFG4BD1Z",
            },
            body: datos,
            redirect: "follow",
          }
        );
    
        console.log(response);
    
        if (response.data) {
          alert(response.data);
        }
      };*/
  return (
    <div className="modalP fixed inset-0 flex justify-center">
      <div className="w-[600px] flex flex-col">
        <div className="modal3 bg-white p-2 rounded">
          <button
            className="text-red text-xl place-self-end"
            onClick={() => onClose()}
          >
            x
          </button>
          <br />
          <br />
          <main className="modal2 flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Datos del Vevhiculo</h1>
            <form
              className="flex flex-col items-center justify-center"
              onSubmit={handleSubmit}
            >
              <label className="text-xl font-bold">Cédula / R.I.F.</label>
              <input
                className="border-2 border-gray-400 rounded-lg p-2 m-2"
                type="text"
                name="cedulaPagador"
                value={formData.cedulaPagador}
                placeholder="V12345678 o J12345678"
                onChange={handleChange}
              />
              <label className="text-xl font-bold">Teléfono del pago</label>
              <input
                className="border-2 border-gray-400 rounded-lg p-2 m-2"
                type="text"
                name="telefonoPagador"
                placeholder="04XX-XXXX"
                value={formData.telefonoPagador}
                onChange={handleChange}
              />
              <label className="text-xl font-bold">Fecha de pago</label>
              <input
                className="border-2 border-gray-400 rounded-lg p-2 m-2"
                type="text"
                name="fechaPago"
                placeholder="aaaa-mm-dd"
                value={formData.fechaPago}
                onChange={handleChange}
              />
              <label className="text-xl font-bold">
                Referencia ultimos 6 digitos
              </label>
              <input
                className="border-2 border-gray-400 rounded-lg p-2 m-2"
                type="text"
                name="referencia"
                placeholder="123456"
                value={formData.referencia}
                onChange={handleChange}
              />

              <button className="resumebtn" type="submit">
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Modal;
