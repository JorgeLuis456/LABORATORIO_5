import { useState } from "react";
import type{ Plato } from "./types";

type PlatoModalProps = {
  plato: Plato | null;
  setPlatoEditar: (p: Plato | null) => void;
  setPlatos: (p: Plato[]) => void;
  setMostrarModal: (b: boolean) => void;
};

export default function PlatoModal({
  plato,
  setPlatoEditar,
  setPlatos,
  setMostrarModal,
}: PlatoModalProps) {
  const [nuevoPlato, setNuevoPlato] = useState<Plato>(
    plato || {
      id: 0,
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      categoria: "Plato Principal",
      disponible: true,
    }
  );

  const guardarPlato = () => {
    if (!nuevoPlato.nombre || nuevoPlato.precio <= 0) {
      alert("Completa todos los campos y verifica el precio");
      return;
    }

    setPlatos((prev) => {
      if (plato)
        return prev.map((p) =>
          p.id === plato.id ? { ...plato, ...nuevoPlato } : p
        );
      return [...prev, { ...nuevoPlato, id: prev.length + 1 }];
    });

    setMostrarModal(false);
    setPlatoEditar(null);
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
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "16px" }}>
          {plato ? "Editar Plato" : "Adicionar Plato"}
        </h2>

        <label>Nombre:</label>
        <input
          type="text"
          value={nuevoPlato.nombre}
          onChange={(e) =>
            setNuevoPlato({ ...nuevoPlato, nombre: e.target.value })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Descripción:</label>
        <textarea
          value={nuevoPlato.descripcion}
          onChange={(e) =>
            setNuevoPlato({ ...nuevoPlato, descripcion: e.target.value })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Precio:</label>
        <input
          type="number"
          value={nuevoPlato.precio}
          onChange={(e) =>
            setNuevoPlato({ ...nuevoPlato, precio: parseFloat(e.target.value) })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Imagen URL:</label>
        <input
          type="text"
          value={nuevoPlato.imagen}
          onChange={(e) =>
            setNuevoPlato({ ...nuevoPlato, imagen: e.target.value })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Categoria:</label>
        <select
          value={nuevoPlato.categoria}
          onChange={(e) =>
            setNuevoPlato({
              ...nuevoPlato,
              categoria: e.target.value as Plato["categoria"],
            })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "16px",
            padding: "6px",
          }}
        >
          <option>Entrada</option>
          <option>Plato Principal</option>
          <option>Bebida</option>
          <option>Postre</option>
        </select>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <button
            onClick={guardarPlato}
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
            {plato ? "Guardar Cambios" : "Adicionar Plato"}
          </button>
          <button
            onClick={() => {
              setMostrarModal(false);
              setPlatoEditar(null);
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