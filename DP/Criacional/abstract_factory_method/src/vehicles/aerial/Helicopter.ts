import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{

    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log('Iniciando a decolagem...')
    }
    getCargo(): void {
        console.log('Pegamos os passageiros, estamos prontos!')
    }
    checkWind(): void {
        console.log('Ventos à 25km/h')   
     }

}