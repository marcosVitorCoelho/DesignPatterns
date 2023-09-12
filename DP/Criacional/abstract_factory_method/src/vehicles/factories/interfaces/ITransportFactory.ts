import ILandVehicle from './../../land/interfaces/ILandVehicles';
import IAircraft from './../../aerial/interfaces/IAircraft';


export default interface ITransportFactory{
    createTransportVehicle(): ILandVehicle
    createTransportAircraft(): IAircraft
}