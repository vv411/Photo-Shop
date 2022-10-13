import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get totalPrice() {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

}
