import IVehiclesCar from "./IVehicleCar";
import IVehicles from "./IVehicles";

export default class Car implements IVehiclesCar, IVehicles {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("ligando os motores");
  }
  configurationCar(
    color: string,
    year: number,
    engine: number,
    seats: number
  ): void {
    console.log(
      `Carro da cor ${color}, do ano ${year}, o motor de ${engine} e com ${seats} assentos`
    );
    this.startVehicle();
  }
}
