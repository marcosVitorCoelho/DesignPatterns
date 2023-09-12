import Transport from "./Transport";
import Bycicle from "./vehicles/Bycicle";
import IVehicles from "./vehicles/interfaces/IVehicles";

export default class BycicleTransport extends Transport {
  protected createTransport(): IVehicles {
    return new Bycicle();
  }
}
