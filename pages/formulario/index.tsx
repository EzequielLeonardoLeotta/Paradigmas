import React from "react";
import Head from "next/head";

//Without state
export default function Form() {
  let firstName: string;
  let lastName: string;

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
    firstName = "";
    lastName = "";
  };

  return (
    <>
      <Head children={<title>Formulario</title>} />
      <form onSubmit={verifyData}>
        <input
          type="text"
          pattern="[a-zA-Z]*"
          placeholder="Ingrese Nombre"
          onChange={(e) => (firstName = e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          pattern="[a-zA-Z]*"
          placeholder="Ingrese Apellido"
          onChange={(e) => (lastName = e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Validar</button>
      </form>
    </>
  );
}
