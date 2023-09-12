import IAircraft from "../aerial/interfaces/IAircraft";
import ITransportFactory from "../factories/interfaces/ITransportFactory";
import ILandVehicle from "../land/interfaces/ILandVehicles";

export default class Client {

    private vehicle: ILandVehicle
    private aircraft: IAircraft

    constructor(factory: ITransportFactory){
        this.aircraft = factory.createTransportAircraft()
        this.vehicle = factory.createTransportVehicle()
    }


    startRoute(): void{
        this.vehicle.startRoute()
        this.aircraft.startRoute()
    }
}