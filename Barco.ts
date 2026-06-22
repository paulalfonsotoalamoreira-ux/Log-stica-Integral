import { ITransporte } from "./ITransporte";
export class Barco implements ITransporte {
    entregar(): void {
        console.log("Entrega realizada por mar utilizando un Barco.");
    }
}