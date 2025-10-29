type SidebarProps = {
  setSeccion: (value: string) => void;
  rol: "admin" | "usuario";
};

export default function Sidebar({ setSeccion, rol }: SidebarProps) {
  const botonesAdmin = ["Inicio", "Usuarios", "Platos", "Pedidos", "Contacto"];
  const botonesUsuario = ["Inicio", "Mi Pedido", "Contacto"];

  const botones = rol === "admin" ? botonesAdmin : botonesUsuario;

  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "black",
        borderRight: "4px solid yellow",
        padding: "16px",
      }}
    >
      <h2>👨‍🍳 LAS GUINDAS</h2>
      {botones.map((nombre) => (
        <button
          key={nombre}
          onClick={() => setSeccion(nombre)}
          style={{
            display: "block",
            width: "100%",
            margin: "8px 0",
            padding: "8px",
            backgroundColor: "yellow",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {nombre}
        </button>
      ))}
    </div>
  );
}