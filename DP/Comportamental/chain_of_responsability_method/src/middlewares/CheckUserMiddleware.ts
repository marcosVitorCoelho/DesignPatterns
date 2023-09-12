import Middleware from "./Middleware";
import chalk from 'chalk'
import DataBase from './../servers/DataBase';

export default class CheckUserMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
         
        if(!email.includes("@")){
            console.log(chalk.red("Email inválido!"))
            return false
        }

        if(!DataBase.filter(user => user.email === email && user.password === password).length){
            console.log(chalk.red("Email e ou Senha Inválidos"))
            return false
        }

        return this.checkNext(email, password)
    }

}