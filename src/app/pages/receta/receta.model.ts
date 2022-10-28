import { Medicamento } from "./usuario/medicamento.model";

export interface Receta{
    _id:string;
    cip: string;
    foto:string;
    nombre:string;
    medicamentos?:Medicamento[]; 
    



}