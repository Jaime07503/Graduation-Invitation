import React, { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const isFirstInput = useRef(true);
  const navigate = useNavigate();

  const validFamilies = [
    "Agreda Herrera",
    "Beltran Valenzuela",
    "Agreda Lucha",
    "Figueroa Valenzuela",
    "Rodríguez Valenzuela",
    "Contreras Cabezas",
    "Martínez Herrera CH",
    "Martínez Herrera SL",
    "Martínez Herrera SS",
    "Valenzuela Herrera",
    "Uribe",
    "Contreras Castaneda",
    "Escalante Perez",
  ];

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = input === "";
      return;
    }

    if (input === "") {
      setError("No se ha ingresado una Familia");
    } else if (input.length < 4) {
      setError("La Familia debe tener al menos 4 caracteres");
    } else if (!validFamilies.includes(input)) {
      setError("Familia incorrecta");
    } else {
      setError("");
    }
  }, [input]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      setError("No se ha ingresado una Familia");
    } else if (input.length < 4) {
      setError("La Familia debe tener al menos 4 caracteres");
    } else if (!validFamilies.includes(input)) {
      setError("Familia incorrecta");
    } else {
      setError("");
      localStorage.setItem("family", input);
      navigate("/invitation");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <div className="border-4 border-double border-gold rounded-lg p-4 m-4 opacity-70">
          <h1 className="text-gold text-3xl text-center mb-2">Familia</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="family"
              name="family"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Martínez Herrera CH"
              className="text-black text-2xl rounded-lg w-full text-center p-2 border-2 border-gold mb-2"
              autoComplete="off"
            />
            <button
              type="submit"
              className="text-gold p-2 rounded-lg w-full border-2 border-gold hover:bg-gold hover:text-white mb-2"
            >
              Ver Invitación
            </button>
          </form>
          <div>
            {error && (
              <p className="text-red-500 border-2 border-red-500 p-2 rounded-lg text-center">
                {error}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
