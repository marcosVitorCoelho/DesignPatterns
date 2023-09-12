import IVehicles from "./interfaces/IVehicles";

export default class Car implements IVehicles {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros, estamos prontos");
  }
}
