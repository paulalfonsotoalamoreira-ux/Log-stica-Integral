import { EmpresaLogistica } from "./EmpresaLogistica";
import { ITransporte } from "./ITransporte";
import { Barco } from "./Barco";
export class LogisticaMaritima extends EmpresaLogistica {
    crearTransporte(): ITransporte {
        return new Barco();
    }
}