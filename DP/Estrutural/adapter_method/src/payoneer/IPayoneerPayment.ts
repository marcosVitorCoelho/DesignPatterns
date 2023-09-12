import Token from "../utils/token";

export default interface IPayoneerPayment {

    authToken(): Token
    sendPayment(): void
    receivedPaymet(): void

}