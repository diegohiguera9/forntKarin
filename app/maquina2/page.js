"use client";

import { useState } from "react";
import Ejemplo from "../_components/ejemplo";

export default function Maquia2 (){
    const [letra, setLetra] = useState('String Inicial')

    function funcion3 (valor) {
        console.log(valor)
        return 
    }
    return (
        <div className="h-screen">
            <h2 className="text-xl">Esta es la pagina de maquina2</h2>
            <p>Hola</p>
            <div>Texto</div>
            <input
            value={letra}
            onChange={(event)=>setLetra(event.target.value)}
            ></input>
            <Ejemplo/>
        </div>
    )
}