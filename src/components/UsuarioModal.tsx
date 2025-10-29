import { useState } from "react";
import type { Usuario } from "./types";

type UsuarioModalProps = {
  usuario: Usuario | null;
  setUsuarioEditar: (u: Usuario | null) => void;
  setUsuarios: (u: Usuario[]) => void;
  setMostrarModal: (b: boolean) => void;
};

export default function UsuarioModal({
  usuario,
  setUsuarioEditar,
  setUsuarios,
  setMostrarModal,
}: UsuarioModalProps) {
  const [nuevoUsuario, setNuevoUsuario] = useState<Usuario>(
    usuario || { id: 0, nombre: "", email: "", rol: "usuario" }
  );

  const guardarUsuario = () => {
    if (!nuevoUsuario.nombre || !nuevoUsuario.email) {
      alert("Por favor completa todos los campos");
      return;
    }

    setUsuarios((prev) => {
      if (usuario) {
        return prev.map((u) =>
          u.id === usuario.id ? { ...usuario, ...nuevoUsuario } : u
        );
      } else {
        return [...prev, { ...nuevoUsuario, id: prev.length + 1 }];
      }
    });

    setMostrarModal(false);
    setUsuarioEditar(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "gray",
          padding: "24px",
          borderRadius: "8px",
          border: "3px solid yellow",
          width: "350px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          {usuario ? "Editar Usuario" : "Adicionar Usuario"}
        </h2>

        <label>Nombre:</label>
        <input
          type="text"
          value={nuevoUsuario.nombre}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, nombre: e.target.value })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={nuevoUsuario.email}
          onChange={(e) =>
            setNuevoUsuario({ ...nuevoUsuario, email: e.target.value })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Rol:</label>
        <select
          value={nuevoUsuario.rol}
          onChange={(e) =>
            setNuevoUsuario({
              ...nuevoUsuario,
              rol: e.target.value as "admin" | "usuario",
            })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "16px",
            padding: "6px",
          }}
        >
          <option value="admin">Administrador</option>
          <option value="usuario">Usuario</option>
        </select>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <button
            onClick={guardarUsuario}
            style={{
              backgroundColor: "yellow",
              color: "black",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {usuario ? "Guardar Cambios" : "Adicionar Usuario"}
          </button>

          <button
            onClick={() => {
              setMostrarModal(false);
              setUsuarioEditar(null);
              setNuevoUsuario({ id: 0, nombre: "", email: "", rol: "usuario" });
            }}
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
