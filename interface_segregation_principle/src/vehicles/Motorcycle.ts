import IVehicles from "./IVehicles";
import IVehiclesMotorcycle from "./IVehiclesMotorcycle";

export default class Motorcycle implements IVehiclesMotorcycle, IVehicles {
  constructor(color: string, year: number, engine: number) {
    this.configurationMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log("ligando os motores");
  }
  configurationCar(color: string, year: number, engine: number): void {
    throw new Error("Method not implemented.");
  }

  configurationMotorcycle(color: string, year: number, engine: number): void {
    console.log(
      `Moto da cor ${color}, do ano ${year}, o motor de ${engine} cilindradas`
    );
    this.startVehicle();
  }
}
