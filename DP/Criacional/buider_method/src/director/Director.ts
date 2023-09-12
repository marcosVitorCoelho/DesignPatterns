import IBuilder from "../builders/IBuilder.interface";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{
    constructor(private builder: IBuilder){}

    constructSedanCar(){

        this.builder.setVehicleType(VehicleType.SEDANS)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(16000))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))

    }

    constructMotorcycle(){

        this.builder.setVehicleType(VehicleType.MOTORCYCLE)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(160))
        this.builder.setSeats(1)
        this.builder.addWheel(new Wheel(20))
        this.builder.addWheel(new Wheel(20))
        
    }

    constructTruck(){

        this.builder.setVehicleType(VehicleType.TRUCK)
        this.builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL)
        this.builder.setEngine(new Engine(13000))
        this.builder.setSeats(3)
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22))
        this.builder.addWheel(new Wheel(22)) 
        
    }
}