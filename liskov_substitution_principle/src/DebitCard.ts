import NubankCard from "./NubankCard";

export default class DebitCard extends NubankCard {
  validate(): void {
    console.log("Verificando se há saldo o suficiente...");
  }
}
