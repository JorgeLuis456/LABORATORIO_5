import { useState } from "react";
import type { Usuario, Plato, Pedido } from "../components/types";
import UsuarioModal from "../components/UsuarioModal";
import PlatoModal from "../components/PlatoModal";
import PedidoModal from "../components/PedidoModal";

type ContentProps = {
  seccion: string;
  rol: "admin" | "usuario";
};

export default function Content({ seccion, rol }: ContentProps) {
  // Estados generales
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [platos, setPlatos] = useState<Plato[]>([]);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  // Modal states
  const [usuarioEditar, setUsuarioEditar] = useState<Usuario | null>(null);
  const [platoEditar, setPlatoEditar] = useState<Plato | null>(null);
  const [pedidoEditar, setPedidoEditar] = useState<Pedido | null>(null);

  const [mostrarModalUsuario, setMostrarModalUsuario] = useState(false);
  const [mostrarModalPlato, setMostrarModalPlato] = useState(false);
  const [mostrarModalPedido, setMostrarModalPedido] = useState(false);

  // Funciones para abrir modales
  const abrirModalUsuario = (u?: Usuario) => {
    setUsuarioEditar(u || null);
    setMostrarModalUsuario(true);
  };

  const abrirModalPlato = (p?: Plato) => {
    setPlatoEditar(p || null);
    setMostrarModalPlato(true);
  };

  const abrirModalPedido = (p?: Pedido) => {
    setPedidoEditar(p || null);
    setMostrarModalPedido(true);
  };

  // Render de secciones
  const renderContenido = () => {
    switch (seccion) {
      case "Inicio":
        return <h1>Bienvenido a "LAS GUINDAS"</h1>;

      case "Usuarios":
        if (rol !== "admin") return <p>No tienes permisos para esta sección</p>;
        return (
          <div>
            <h1>Gestión de Usuarios</h1>
            <button
              onClick={() => abrirModalUsuario()}
              style={{ marginBottom: "12px" }}
            >
              + Adicionar Usuario
            </button>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    ID
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Nombre
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Email
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Rol
                  </th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr
                    key={u.id}
                    onClick={() => abrirModalUsuario(u)}
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {u.id}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {u.nombre}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {u.email}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {u.rol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {mostrarModalUsuario && (
              <UsuarioModal
                usuario={usuarioEditar}
                setUsuarioEditar={setUsuarioEditar}
                setUsuarios={setUsuarios}
                setMostrarModal={setMostrarModalUsuario}
              />
            )}
          </div>
        );

      case "Platos":
        if (rol !== "admin") return <p>No tienes permisos para esta sección</p>;
        return (
          <div>
            <h1>Gestión de Platos</h1>
            <button
              onClick={() => abrirModalPlato()}
              style={{ marginBottom: "12px" }}
            >
              + Adicionar Plato
            </button>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    ID
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Nombre
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Precio
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Categoría
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Disponible
                  </th>
                </tr>
              </thead>
              <tbody>
                {platos.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => abrirModalPlato(p)}
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.id}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.nombre}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.precio}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.categoria}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.disponible ? "Sí" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {mostrarModalPlato && (
              <PlatoModal
                plato={platoEditar}
                setPlatoEditar={setPlatoEditar}
                setPlatos={setPlatos}
                setMostrarModal={setMostrarModalPlato}
              />
            )}
          </div>
        );

      case "Pedidos":
        if (rol !== "admin") return <p>No tienes permisos para esta sección</p>;
        return (
          <div>
            <h1>Gestión de Pedidos</h1>
            <button
              onClick={() => abrirModalPedido()}
              style={{ marginBottom: "12px" }}
            >
              + Adicionar Pedido
            </button>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    ID
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    ID Usuario
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Total
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Estado
                  </th>
                  <th style={{ border: "1px solid yellow", padding: "8px" }}>
                    Fecha
                  </th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((p) => (
                  <tr
                    key={p.id}
                    onClick={() => abrirModalPedido(p)}
                    style={{ cursor: "pointer" }}
                  >
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.id}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.id_usuario}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.total}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.estado}
                    </td>
                    <td style={{ border: "1px solid yellow", padding: "8px" }}>
                      {p.fecha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {mostrarModalPedido && (
              <PedidoModal
                pedido={pedidoEditar}
                setPedidoEditar={setPedidoEditar}
                setPedidos={setPedidos}
                setMostrarModal={setMostrarModalPedido}
              />
            )}
          </div>
        );

      case "Mi Pedido":
        if (rol !== "usuario")
          return <p>No tienes permisos para esta sección</p>;
        return <h1>Mis pedidos (funcionalidad futura)</h1>;

      case "Contacto":
        return (
          <p>
            📧 contacto@lasguindas.com
            <br />
            ☎️ +591 76577966
          </p>
        );

      default:
        return <h1>Sección no encontrada</h1>;
    }
  };

  return (
    <div
      style={{
        flex: 1,
        padding: "24px",
        borderLeft: "4px solid yellow",
        overflowY: "auto",
      }}
    >
      {renderContenido()}
    </div>
  );
}