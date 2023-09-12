import IPaymentInstrument from "./IPaymentInstrument";

export default class NubankRewards implements IPaymentInstrument {
  //overlap de método
  validate(): void {
    console.log("Verificar a pontuação no rewards");
  }
  collectPaymet(): void {
    console.log("Pagar com a pontuação no rewards");
  }

  ab(): void {
    //Posso criar métodos próprios sem comprometer a classe/Interface Base
    console.log("oi");
  }
}
