import readline from 'readline'

import Server from "./servers/Server";
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';
import CheckPassWordStrengthMiddleware from './middlewares/CheckPasswordStrengthMiddleware';

declare var process

const server = new Server()

function setPromptQuestions(){

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question('Digite o seu email: ', (email) => {
        rl.question("Digite a sua senha: ", (password) => {
            server.login(email, password)
            rl.close();
        })
    });

    rl.on("close", () => setPromptQuestions())
}

const middleware = new CheckUserMiddleware()
middleware.linkWith(new CheckPermissionMiddleware().linkWith(new CheckPassWordStrengthMiddleware()))

server.setMiddleware(middleware)

setPromptQuestions()
