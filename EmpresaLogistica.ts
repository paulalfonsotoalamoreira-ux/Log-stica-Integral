import { ITransporte } from "./ITransporte";
export abstract class EmpresaLogistica {

    abstract crearTransporte(): ITransporte;

    planificarEntrega(): void {
        console.log("Planificando entrega...");

        const transporte = this.crearTransporte();

        transporte.entregar();

    }
}