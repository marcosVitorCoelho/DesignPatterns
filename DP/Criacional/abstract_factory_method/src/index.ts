import Client from "./vehicles/client/Client";
import Company from "./vehicles/consts/Company";
import LimeTransport from "./vehicles/factories/LimeTransport";
import NineNineTransport from "./vehicles/factories/NineNineTransport";
import UberTransport from "./vehicles/factories/UberTransport";
import ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory";

const currentCompany = Company.LIME
let factory: ITransportFactory


switch(currentCompany){

    case Company.UBER:
        factory = new UberTransport()
        break

    case Company.NINENINE:
        factory = new NineNineTransport()
        break
    
    case Company.LIME:
        factory = new LimeTransport()
        break

    default: 
        console.error('Compania não cadastrada')
}

const client = new Client(factory)
client.startRoute()