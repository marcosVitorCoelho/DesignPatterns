import IDbProduct from "../model/IDbProduct";
import MongoDBProduct from "../model/MongoDBProduct";
import MySQLProduct from "../model/MySQLProduct";
import Db from "./../model/Db";

export default class DbProductFactory {
  public static create(type: Db): IDbProduct {
    if (type === Db.MYSQL) {
      return new MySQLProduct();
    } else if (type === Db.MONGODB) {
      return new MongoDBProduct();
    } else {
      throw new Error("Deu ruim");
    }
  }
}
