import IAircraft from "../aerial/interfaces/IAircraft";
import ILandVehicle from "../land/interfaces/ILandVehicles";
import ITransportFactory from "./interfaces/ITransportFactory";
import Motorcycle from './../land/Motorcycle';
import Helicopter from './../aerial/Helicopter';


export default class LimeTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle()
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter()
    }

}