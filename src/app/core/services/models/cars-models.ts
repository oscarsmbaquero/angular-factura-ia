
export interface ICar{
    // _id?: any;
    // favorite?: boolean;
    // marca: string;
    imagen: string;
    imagenUrl?:string;
    image?:string;
    // modelo: string;
    // anio: number;
    // tipo: TypeCar;
}
 export enum TypeCar {
    "4x4" = "4x4",
    "berlinas" = "berlinas",
    "electricos" = "electricos",
    "deportivos" = "deportivos",
    "muscle_cars" = "muscle cars",
    "emergencias" = "emergencias"
}
export const TypeOfCar = Object.values(TypeCar);



