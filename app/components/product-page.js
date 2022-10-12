import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductPageComponent extends Component {
  @service('shopping-cart') cart;

  @action
  addToCart(prodId) {
    let item = {
      id:prodId,
      price: 10
    }

    this.cart.add(item);
  }

  
}
