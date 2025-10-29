import { useState } from "react";
import type { Pedido } from "./types";

type PedidoModalProps = {
  pedido: Pedido | null;
  setPedidoEditar: (p: Pedido | null) => void;
  setPedidos: (p: Pedido[]) => void;
  setMostrarModal: (b: boolean) => void;
};

export default function PedidoModal({
  pedido,
  setPedidoEditar,
  setPedidos,
  setMostrarModal,
}: PedidoModalProps) {
  const [nuevoPedido, setNuevoPedido] = useState<Pedido>(
    pedido || {
      id: 0,
      id_usuario: 0,
      total: 0,
      fecha: new Date().toISOString(),
      estado: "En preparación",
    }
  );

  const guardarPedido = () => {
    if (nuevoPedido.total <= 0) {
      alert("El total del pedido debe ser mayor a 0");
      return;
    }

    setPedidos((prev) => {
      if (pedido)
        return prev.map((p) =>
          p.id === pedido.id ? { ...pedido, ...nuevoPedido } : p
        );
      return [...prev, { ...nuevoPedido, id: prev.length + 1 }];
    });

    setMostrarModal(false);
    setPedidoEditar(null);
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
          {pedido ? "Editar Pedido" : "Adicionar Pedido"}
        </h2>

        <label>ID Usuario:</label>
        <input
          type="number"
          value={nuevoPedido.id_usuario}
          onChange={(e) =>
            setNuevoPedido({
              ...nuevoPedido,
              id_usuario: parseInt(e.target.value),
            })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Total:</label>
        <input
          type="number"
          value={nuevoPedido.total}
          onChange={(e) =>
            setNuevoPedido({
              ...nuevoPedido,
              total: parseFloat(e.target.value),
            })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "12px",
            padding: "6px",
          }}
        />

        <label>Estado:</label>
        <select
          value={nuevoPedido.estado}
          onChange={(e) =>
            setNuevoPedido({
              ...nuevoPedido,
              estado: e.target.value as Pedido["estado"],
            })
          }
          style={{
            display: "block",
            width: "100%",
            marginBottom: "16px",
            padding: "6px",
          }}
        >
          <option>En preparación</option>
          <option>Listo</option>
          <option>Entregado</option>
        </select>

        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
        >
          <button
            onClick={guardarPedido}
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
            {pedido ? "Guardar Cambios" : "Adicionar Pedido"}
          </button>
          <button
            onClick={() => {
              setMostrarModal(false);
              setPedidoEditar(null);
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
