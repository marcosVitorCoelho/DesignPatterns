import Token from "../utils/token";

export default interface IMercadoPagoPayment{
    
    authToken(): Token
    mercadoPagoPayment(): void
    mercadoPagoReceive(): void

}