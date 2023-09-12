import chalk from "chalk";
import DataBase from "../servers/DataBase";
import Middleware from "./Middleware";

export default class CheckPassWordStrengthMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        const users = DataBase.filter(item => item.email === email)

       if(users[0].password === '123456'){
            console.log(chalk.yellow("Senha fraca, cogite alterar para uma senha mais forte"))
       }

        console.log(chalk.blue("Seja bem vindo usuário!"))
        return this.checkNext(email, password)
    }

}