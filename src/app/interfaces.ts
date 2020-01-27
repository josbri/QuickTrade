export interface IProducto {
    id: string;
    nombre: string;
    descripcion: string;
    categoria: string;
    precio: number;
    id_usuario: string;
}

export interface IMotor extends IProducto {
    tipo: string;
    km: number;
    date: Date;
}

export interface IInmobiliaria extends IProducto {
    metros: number;
    bath: number;
    habitaciones: number;
    localidad: string;
}

export interface ITecnologia extends IProducto {
    estado: string;
}

/**
 * USUARIOS
 */
export interface IUsuario {
    id: string,
    nombre: string,
    email: string
}