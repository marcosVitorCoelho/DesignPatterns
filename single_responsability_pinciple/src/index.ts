//O princípio de responsabilidade única diz que uma classe não pode haver mais de um objetivo
//A classe Client é responsável apenas por alterar um cliente, enquanto Notify é responsável somente por enviar notificações

import Client from "./Client";
import Notify from "./Notify";

const clienteA = new Client("Joao", "aaaa");
const notificacao = new Notify(clienteA);

notificacao.sendEmail();
