import Transport from "./Transport";
import Car from "./vehicles/Car";
import IVehicles from "./vehicles/interfaces/IVehicles";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicles {
    return new Car();
  }
}
