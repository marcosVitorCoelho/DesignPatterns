export default interface IPaymentInstrument {
  validate(): void;
  collectPaymet(): void;
}
