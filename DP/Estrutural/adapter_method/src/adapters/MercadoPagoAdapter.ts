import IMercadoPagoPayment from "../mercadoPago/IMercadoPago";
import IPayPalPayment from "../paypal/IPayPalPayment";
import Token from "../utils/token";
import MercadoPago from './../mercadoPago/MercadoPago';

export default class MercadoPagoAdapter implements IPayPalPayment{

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando o MercadoPago utilizando os métodos e padrões do PayPal")
    }

    authToken(): Token {
        return this.mercadoPago.authToken()
    }
    payPalPayment(): void {
        return this.mercadoPago.mercadoPagoPayment()
    }
    payPalReceive(): void {
        return this.mercadoPago.mercadoPagoReceive()
    }

}