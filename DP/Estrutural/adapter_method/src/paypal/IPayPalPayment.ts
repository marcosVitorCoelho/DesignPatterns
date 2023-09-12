import Token from "../utils/token";

export default interface IPayPalPayment{
    
    authToken(): Token
    payPalPayment(): void
    payPalReceive(): void

    

}