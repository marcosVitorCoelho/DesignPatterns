import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft{

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log('Iniciando a decolagem...')
    }

    getCargo(): void {
        console.log('Passageiros OK, ligando hélices...')
    }
    checkWind(): void {
        console.log('Ventos à 25km/h, sudeste, ventos OK!')   
     }


}