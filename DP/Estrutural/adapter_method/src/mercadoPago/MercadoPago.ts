import Token from "../utils/token";
import IMercadoPagoPayment from "./IMercadoPago";

export default class MercadoPago implements IMercadoPagoPayment{
    private token: Token

    authToken(): Token {
        return new Token()
    }
    mercadoPagoPayment(): void {
        this.token = this.authToken()
        console.log("Token: " + this.token.getToken())
        console.log("Enviando pagamentos via MercadoPago")
    }
    mercadoPagoReceive(): void {
        console.log("Recebendo pagamentos via MercadoPago")    
    }

}