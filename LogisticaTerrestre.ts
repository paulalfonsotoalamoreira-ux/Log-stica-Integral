import { EmpresaLogistica } from "./EmpresaLogistica";
import { ITransporte } from "./ITransporte";
import { Camion } from "./Camion";


export class LogisticaTerrestre extends EmpresaLogistica {
    crearTransporte(): ITransporte {
        return new Camion();
    }
}