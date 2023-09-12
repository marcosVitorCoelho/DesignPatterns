import Engine from "../components/Engine";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import Transmission from './../components/Transmission';

export default interface IBuilder{

    reset(): void;
    getVehicle(): Vehicle;

    addWheel(wheel: Wheel): void
    setVehicleType(valie: VehicleType): void
    setSeats(seats: number): void
    setEngine(engine: Engine): void
    setTransmission(transmission: Transmission): void
}