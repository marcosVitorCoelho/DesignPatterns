import IVehicles from "./interfaces/IVehicles";

export default class Motorcycle implements IVehicles {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Já pegamos a encomenda");
  }
}
