import { Usuario } from "./user";

export interface OrderDetails {
    id_detalle_orden:       number;
    id_usuario:             number;
    empresa:                string;
    direccion:              string;
    cuidad:                 string;
    cedula:                 string;
    usuario_detalles_orden: Usuario;
    telefono?: string;
    correo?: string;
    nombres?: string;
    apellidos?: string;
}

