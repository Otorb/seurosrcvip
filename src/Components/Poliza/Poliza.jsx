import React from "react";
import { useState, Fragment, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import rcv from '../../assets/rcv.jpeg'
import { getImageCloudinaryObject } from '../../Utils/crud-Cloudinary'
import Modal from "../Modal/Modal";
function Poliza() {
  const auth = getAuth();
  const router = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const [formDocument, setFormDocument] = useState({
    numero:"",
    inicio:"",
    horaInicio:"",
    fechaFin:"",
    horaFin:"",
    nombre: "",
    cedula: "",
    correo: "",
    telefono: "",
    estado: "",
    ciudad: "",
    sector: "",
    imagenCedula: "",
    imagenFirma: "",
    imagenCarnet: "",
    placa: "",
    marca: "",
    modelo: "",
    tipo: "",
    ano: "",
    clase: "",
    puesto: "",
    carga: "",
    color: "",
    motor: "",
    carroceria: "",
    tcr:"",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formulario, setFormulario] = useState(false);
  // Function to handle form input changes
  const handleChange = (e) => {
    setFormDocument({
      ...formDocument,
      [e.target.name]: e.target.value,
    });
  };
  const handleImageChange = async (e) => {
    // console.log('imagen==>', e.target.files);
    const name = e.target.name;
    const imageURLs = await getImageCloudinaryObject(name, e.target.files[0]);
    // console.log('imagen==>', e);

    setFormDocument({
      ...formDocument,
      [e.target.name]: imageURLs,
    });
  };
  const handleImageRemove = (e) => {
    setFormDocument({
      ...formDocument,
      [e.target.name]: null,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWindow = window.open("/pdf")
    if(!newWindow){
        console.error("la ventana esta bloqueada")
    }
    setSubmitted(true);
    setFormulario(true)
    localStorage.setItem("formData", JSON.stringify(formDocument));
    console.log("Datos guardados:", formDocument);
  };
  return (
    <Fragment>
      {user ? (
        <div class="font-[sans-serif]">
          <button
            onClick={handleSignOut}
            className="bg-transparent outline outline-2 outline-custom-green cursor-pointer shadow-buttonShadow px-3 py-3 text-3xl text-custom-green rounded-2xl w-fit relative after:content-['»'] after:absolute after:opacity-0 after:right-2 hover:after:transition-all duration-700 hover:after:opacity-100 hover:after:right-4 hover:pr-12 hover:text-white hover:bg-custom-green md:text-4xl "
          >
            Cerrar Sesión
          </button>
          <div class="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-36"></div>
          <div class="-mt-20 mb-6 px-4">
            <div class="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-lg">
              <h2 class="text-xl text-gray-800 font-bold">
                Adquiera su R.C.V Online
              </h2>
              <br></br>
              <br></br>
              <form
                class="mt-8 grid md:grid-cols-3 gap-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <ul>Nombre / Razón Social</ul>
                  <input
                    type="text"
                    placeholder="Nombre y apellido"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="nombre"
                    value={formDocument.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>C.I. / R.I.F.</ul>
                  <input
                    type="text"
                    placeholder="Cédula o R.I.F."
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="cedula"
                    value={formDocument.cedula}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Correo</ul>
                  <input
                    type="email"
                    placeholder="Email"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="correo"
                    value={formDocument.correo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Numero de poliza</ul>
                  <input
                    type="numero"
                    placeholder="N° Poliza"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="numero"
                    value={formDocument.numero}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>TCR</ul>
                  <input
                    type="text"
                    placeholder="N° Poliza"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="tcr"
                    value={formDocument.tcr}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Fecha Inicio</ul>
                  <input
                    type="date"
                    placeholder="Fecha Inicio"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="inicio"
                    value={formDocument.inicio}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Hora Inicio</ul>
                  <input
                    type="text"
                    placeholder="Hora Inicio"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="horaInicio"
                    value={formDocument.horaInicio}
                    onChange={handleChange}
                  />
                </div>
                <div> 
                  <ul>Fecha Fin</ul>
                  <input
                    type="date"
                    placeholder="Fecha fin"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="fechaFin"
                    value={formDocument.fechaFin}
                    onChange={handleChange}
                  />
                </div>
                <div>
                <ul>Hora Fin</ul>
                  <input
                    type="text"
                    placeholder="Hora Fin"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="horaFin"
                    value={formDocument.horaFin}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Teléfono</ul>
                  <input
                    type="email"
                    placeholder="N° de teléfono"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="telefono"
                    value={formDocument.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Estado</ul>
                  <input
                    type="text"
                    placeholder="Estado"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="estado"
                    value={formDocument.estado}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Ciudad</ul>
                  <input
                    type="text"
                    placeholder="Ciudad"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="ciudad"
                    value={formDocument.ciudad}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Sector</ul>
                  <input
                    type="text"
                    placeholder="Sector"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="sector"
                    value={formDocument.sector}
                    onChange={handleChange}
                  />
                </div>
                <div>
                <ul>Foto de Cédula</ul>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    name="imagenCedula"
                  />

                  {formDocument.imagenCedula && (
                    <div>
                      {/* <img 
              src={URL.createObjectURL(formDocument.imagenCedula)} 
              alt="Vista previa" 
              style={{ width: '200px', height: 'auto', marginTop: '10px' }} 
            /> */}
                      <button onClick={handleImageRemove}>
                        Eliminar imagen
                      </button>
                    </div>
                  )}
                </div>
                <div>
                <ul>foto de Firma fondo blanco</ul>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    name="imagenFirma"
                  />

                  {formDocument.imagenFirma && (
                    <div>
                      {/* <img 
              src={URL.createObjectURL(formDocument.imagenfirma)} 
              alt="Vista previa" 
              style={{ width: '200px', height: 'auto', marginTop: '10px' }} 
            /> */}
                      <button onClick={handleImageRemove}>
                        Eliminar imagen
                      </button>
                    </div>
                  )}
                </div>
                <div>
                <ul>Foto Carnet Circulación</ul>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    name="imagenCarnet"
                    placeholder="Carnet"
                  />

                  {formDocument.imagenCarnet && (
                    <div>
                      {/* <img 
              src={URL.createObjectURL(formDocument.imagenCarnet)} 
              alt="Vista previa" 
              style={{ width: '200px', height: 'auto', marginTop: '10px' }} 
            /> */}
                      <button onClick={handleImageRemove}>
                        Eliminar imagen
                      </button>
                    </div>
                  )}
                </div>

                <br></br>

                <h2 class="text-xl text-gray-800 font-bold"></h2>
                <h2 class="text-xl text-gray-800 font-bold"></h2>
                <h2 class="text-xl text-gray-800 font-bold">
                  Datos del Vehículo
                </h2>
                <br></br>

                <h2 class="text-xl text-gray-800 font-bold"></h2>
                <img
                  src={rcv}
                  alt="rcv"
                  className="object-scale-down h-48 w-96"
                />
                <br></br>
                <br></br>
                <div>
                  <ul>Placa</ul>
                  <input
                    type="text"
                    placeholder="Placa"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="placa"
                    value={formDocument.placa}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Marca</ul>
                  <input
                    type="text"
                    placeholder="Marca"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="marca"
                    value={formDocument.marca}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Modelo</ul>
                  <input
                    type="text"
                    placeholder="Modelo"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="modelo"
                    value={formDocument.modelo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Tipo</ul>
                  <input
                    type="text"
                    placeholder="Tipo"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="tipo"
                    value={formDocument.tipo}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Año</ul>
                  <input
                    type="text"
                    placeholder="Año"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="año"
                    value={formDocument.año}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Clase</ul>
                  <input
                    type="text"
                    placeholder="Clase"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="clase"
                    value={formDocument.clase}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>N° de puesto</ul>
                  <input
                    type="text"
                    placeholder="N° de puesto"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="puesto"
                    value={formDocument.puesto}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Capacidad de carga</ul>
                  <input
                    type="text"
                    placeholder="Capacidad de carga"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="carga"
                    value={formDocument.carga}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Color</ul>
                  <input
                    type="text"
                    placeholder="Color"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="color"
                    value={formDocument.color}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Serial del Motor</ul>
                  <input
                    type="text"
                    placeholder="Serial del Motor"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="motor"
                    value={formDocument.motor}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <ul>Serial de Carrocería</ul>
                  <input
                    type="text"
                    placeholder="Serial de Carrocería"
                    class="w-96 rounded-lg py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                    name="carroceria"
                    value={formDocument.carroceria}
                    onChange={handleChange}
                  />
                </div>

                <button
                 type="button"
                 onClick={handleSubmit } 
                  class="rounded-lg px-2 border border-gray-300 text-sm outline-[#007bff]  "
                >
                  Guardar
                </button>
              </form>
              

              {/* <Modal
                isVisible={showModal}
                documents={formDocument}
                onClose={() => setShowModal(false)}
              /> */}
            </div>
          </div>
        </div>
      ) : (
        <h1>Usuario no autenticado</h1>
      )}
    </Fragment>
  );
}

export default Poliza;
