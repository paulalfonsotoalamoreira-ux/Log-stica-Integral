import { ITransporte } from "./ITransporte";
export class Camion implements ITransporte {
    entregar(): void {
        console.log("Entrega realizada por carretera utilizando un Camión.");
    }
}