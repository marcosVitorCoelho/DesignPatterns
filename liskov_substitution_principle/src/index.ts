import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import IPaymentInstrument from "./IPaymentInstrument";
import NubankCard from "./NubankCard";
import NubankRewards from "./NubankRewards";

//const card = new CreditCard();
//const card = new DebitCard();

const card = new NubankRewards(); //card é um objeto derivado (NubankRewards) da classe - Interface Base (IPaymentInstrument)

card.validate();
card.collectPaymet();
