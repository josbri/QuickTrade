export interface IProducto {
    id: number;
    nombre: string;
    descripcion: string;
    categoria: string;
    precio: number;
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