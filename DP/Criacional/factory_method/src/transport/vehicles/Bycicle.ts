import IVehicles from "./interfaces/IVehicles";

export default class Bycicle implements IVehicles {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Pegamos a encomenda de Bike, estamos prontos");
  }
}
