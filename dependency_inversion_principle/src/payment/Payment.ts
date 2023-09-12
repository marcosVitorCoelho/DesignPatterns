import DbProductFactory from "../factory/DbProductFactory";
import Db from "../model/Db";

export default class Payment {
  pay(productId: number): void {
    const dbProduct = DbProductFactory.create(Db.MONGODB);
    const product = dbProduct.getProductById(productId);

    console.log(product);
  }
}
