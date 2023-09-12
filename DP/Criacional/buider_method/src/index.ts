import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder: VehicleBuilder = new VehicleBuilder()
const director: Director = new Director(builder)

director.constructSedanCar();

const sedan: Vehicle = builder.getVehicle()

console.log(`Criado um veículo do tipo: ${sedan.vehicleType}  ccom ${sedan.wheelsTotal} rodas.`)

director.constructTruck()

const truck: Vehicle = builder.getVehicle()

console.log(`Criado um veículo do tipo: ${truck.vehicleType} com ${truck.wheelsTotal} rodas.`)

director.constructMotorcycle()

const moto: Vehicle = builder.getVehicle()

console.log(`Criado um veículo do tipo: ${moto.vehicleType} com potencia de ${moto.engine.power}`)