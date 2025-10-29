export type Usuario = {
  id: number;
  nombre: string;
  email: string;
  rol: "admin" | "usuario";
};

export type Plato = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: "Entrada" | "Plato Principal" | "Bebida" | "Postre";
  disponible: boolean;
};

export type Pedido = {
  id: number;
  id_usuario: number;
  total: number;
  fecha: string;
  estado: "En preparación" | "Listo" | "Entregado";
  comentario?: string;
};

export type DetallePedido = {
  id: number;
  id_pedido: number;
  id_plato: number;
  cantidad: number;
  precio_unitario: number;
  subtotal: number;
};