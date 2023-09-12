import IPlatform from "./IPlatform";

export default class FaceBookLive implements IPlatform{

    constructor(){
        this.configureRMTP()
        console.log("FaceBookLive: Transmissão foi iniciada!")
    }

    configureRMTP(): void {
        this.authToken()
        console.log("FaceBookLive: Configurando o broadcasting")
    }
    
    authToken(): void {
        console.log("FaceBookLive: Autorizando a aplicação")
    }

}