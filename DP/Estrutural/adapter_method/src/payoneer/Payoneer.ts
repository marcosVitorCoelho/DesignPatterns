import Token from "../utils/token";
import IPayoneerPayment from "./IPayoneerPayment";

export default class Payoneer implements IPayoneerPayment{

    private token: Token

    authToken(): Token {
        return new Token()
    }
    sendPayment(): void {
        this.token = this.authToken()
        console.log("Token: " + this.token.getToken())
        console.log("Enviando pagamentos via Payoneer")
    }
    receivedPaymet(): void {
        console.log("Recebendo pagamentos via Payoneer")    
    }

}