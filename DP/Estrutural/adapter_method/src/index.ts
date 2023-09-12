import IPayoneerPayment from "./payoneer/IPayoneerPayment";
import Payoneer from "./payoneer/Payoneer";
import IPayPalPayment from "./paypal/IPayPalPayment";
import PayPal from "./paypal/Paypal";
import PayoneerAdapter from './adapters/PayoneerAdapter';
import IMercadoPagoPayment from "./mercadoPago/IMercadoPago";
import MercadoPago from "./mercadoPago/MercadoPago";
import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";

//const payment: IPayPalPayment = new PayPal()
const payment: IPayPalPayment = new PayoneerAdapter(new Payoneer())
//const paymentMercadoPago: IMercadoPagoPayment = new MercadoPago()
const paymentMercadoPago: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago())

payment.payPalPayment()
payment.payPalReceive()

paymentMercadoPago.payPalPayment()
paymentMercadoPago.payPalReceive()