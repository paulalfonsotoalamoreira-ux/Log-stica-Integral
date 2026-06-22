import { EmpresaLogistica } from "./EmpresaLogistica";
import { LogisticaTerrestre } from "./LogisticaTerrestre";
import { LogisticaMaritima } from "./LogisticaMaritima";

const empresa1: EmpresaLogistica = new LogisticaTerrestre();
const empresa2: EmpresaLogistica = new LogisticaMaritima();

console.log("LOGÍSTICA TERRESTRE");
empresa1.planificarEntrega();

console.log("LOGÍSTICA MARÍTIMA");
empresa2.planificarEntrega();