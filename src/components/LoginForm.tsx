import { useState } from "react";
import type { Usuario } from "../components/types";

type LoginFormProps = {
  setAuth: (auth: { logueado: boolean; usuario?: Usuario }) => void;
};

export default function LoginForm({ setAuth }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de login
    // Aquí luego reemplazaremos con API real
    if (email === "jorge@123" && password === "admin") {
      setAuth({
        logueado: true,
        usuario: { id: 1, nombre: "Admin", email, rol: "admin" },
      });
    } else if (email === "user@123" && password === "user") {
      setAuth({
        logueado: true,
        usuario: { id: 2, nombre: "Usuario", email, rol: "usuario" },
      });
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        margin: "auto",
        marginTop: "30px",
        padding: "24px",
        backgroundColor: "black",
        borderRadius: "8px",
        width: "400px",
        color: "yellow",
      }}
    >
      <h2>♨️Churrasqueria "LAS GUINDAS"♨️</h2>
      <h2>Iniciar Sesión</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          marginBottom: "12px",
          padding: "6px",
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          marginBottom: "12px",
          padding: "6px",
        }}
      />
      <button
        type="submit"
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
        Entrar
      </button>
    </form>
  );
}