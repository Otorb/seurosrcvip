import { useState, useEffect } from "react";
import app from "../../firebase.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Poliza from "../Poliza/Poliza.jsx";

function Admin() {
    const [user, setUser] = useState(null);
    const router = useNavigate();
  
    useEffect(() => {
      const auth = getAuth(app);
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
      return () => unsubscribe();
    }, []);
  
  
  const signInWithGoogle = async () => {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      try {
          await signInWithPopup(auth, provider);
          router.push("/polizas")
      }catch(error){
          console.log(error)
      }
  }
  console.log(user?.email, "usuario aca");

  return (
    <div className="flex flex-col items-center mt-28 sm:mt-20 md:mt-36">
        {user ? (
             <Poliza/>
        ) : (
            <button
                onClick={signInWithGoogle}
                className="bg-transparent outline outline-2 outline-custom-green cursor-pointer shadow-buttonShadow px-3 py-3 text-3xl text-custom-green rounded-2xl w-fit relative after:content-['»'] after:absolute after:opacity-0 after:right-2 hover:after:transition-all duration-700 hover:after:opacity-100 hover:after:right-4 hover:pr-12 hover:text-white hover:bg-custom-green md:text-4xl "
            >
                Iniciar Sesión
            </button>
        )}
    </div>
  )
}

export default Admin