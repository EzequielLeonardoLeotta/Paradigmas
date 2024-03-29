import React, { useState } from "react";
import Head from "next/head";

//With state
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const verifyData = (e: any) => {
    e.preventDefault();

    if (!firstName.trim()) {
      alert("El input nombre está vacío");
      return;
    }

    if (!lastName.trim()) {
      alert("El input apellido está vacío");
      return;
    }

    e.target.reset();
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <Head children={<title>Formulario</title>} />
      <form onSubmit={verifyData}>
        <input
          type="text"
          pattern="[a-zA-Z]*"
          placeholder="Ingrese Nombre"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          pattern="[a-zA-Z]*"
          placeholder="Ingrese Apellido"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Validar</button>
      </form>
    </>
  );
}
