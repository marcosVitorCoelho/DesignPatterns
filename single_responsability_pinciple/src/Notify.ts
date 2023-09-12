import Client from "./Client";

export default class Notify {
  constructor(private cliente: Client) {}

  sendEmail(): boolean {
    console.log("Enviando email..." + this.cliente._email);
    return true;
  }

  sendSMS(): boolean {
    return true;
  }
}
