import Token from '../utils/token';
import IPayPalPayment from './../paypal/IPayPalPayment';
import Payoneer from './../payoneer/Payoneer';

 
export default class PayoneerAdapter implements IPayPalPayment{

    private token: Token

    constructor(private payoneer: Payoneer){
        console.log("Adaptando o Payoneer utilizando os métodos e padrões do PayPal")
    }

    authToken(): Token {
        return this.payoneer.authToken()
    }
    
    payPalPayment(): void {
        return this.payoneer.sendPayment()
    }

    payPalReceive(): void {
        return this.payoneer.receivedPaymet()
    }


}