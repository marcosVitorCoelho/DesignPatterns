export default class Client {
  _email: string;
  _nome: string;
  constructor(private nome: string, private email: string) {
    this._nome = nome;
    this._email = email;
  }

  create(): void {}

  read(): void {}

  update(): void {}

  delete(): void {}
}
