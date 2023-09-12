import TypeVehile from "./TypeVehicle";
import Car from "./vehicles/Car";
import Motorcycle from "./vehicles/Motorcycle";

const type = TypeVehile.MOTORCYCLE;

if (type === TypeVehile.CAR) {
  let vehicle: Car = new Car("amarelo", 2022, 2.0, 4, 2);
} else if (type === TypeVehile.MOTORCYCLE) {
  let vehicle: Motorcycle = new Motorcycle("amarelo", 2022, 2.0);
}
