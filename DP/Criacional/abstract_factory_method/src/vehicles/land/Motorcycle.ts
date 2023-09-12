import ILandVehicle from "./interfaces/ILandVehicles";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Iniciando o entrega...")
    }
    getCargo(): void {
        console.log("Pegamos o encomenda, estamos prontos!")
    }

}