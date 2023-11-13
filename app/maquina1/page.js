"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Maquina1() {

  const [param, setParam] = useState("No info yet")
  
  const sendInfo = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/?number=1");
      //Vamos a capturar la respuesta
      console.log(res)
      setParam(res.data.number)
    } catch (err) {
        alert (err)
    }
  };

  return (
    <div className="h-screen p-4">
      <h1 className="flex justify-center text-xl">Esta es la pagina de la maquina 1</h1>
      <button className="p-2 rounded-lg shadow-xl bg-slate-200 mb-4" onClick={sendInfo}>Eejecuta llamada</button>
      <p>{param}</p>
      <input value={param} onChange={(e)=>setParam(e.target.value)}></input>
    </div>
  );
}
