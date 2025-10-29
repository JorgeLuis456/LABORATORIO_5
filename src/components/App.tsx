import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import LoginForm from "./LoginForm";
import type { Usuario } from "./types";

type Auth = {
  logueado: boolean;
  usuario?: Usuario;
};

export default function App() {
  const [auth, setAuth] = useState<Auth>({ logueado: false });
  const [seccion, setSeccion] = useState<string>("Inicio");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", //alto
        width: "100vw", //ancho
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
        backgroundColor: "black",
        color: "yellow",
      }}
    >
      {auth.logueado ? (
        <>
          <Navbar />
          <div style={{ display: "flex", flex: 1 }}>
            <Sidebar setSeccion={setSeccion} rol={auth.usuario!.rol} />
            <Content seccion={seccion} rol={auth.usuario!.rol} />
          </div>
        </>
      ) : (
        <LoginForm setAuth={setAuth} />
      )}
    </div>
  );
}
