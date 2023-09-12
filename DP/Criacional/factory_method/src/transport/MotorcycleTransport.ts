import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicles from "./vehicles/interfaces/IVehicles";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicles {
    return new Motorcycle();
  }
}
