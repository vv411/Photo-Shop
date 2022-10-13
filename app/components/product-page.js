import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ProductPageComponent extends Component {
  @service('shopping-cart') cart;
  @service('metadata') mdata;

  @tracked price = "5";

  @action
  addToCart(prodId, prodPrice) {
    console.log(prodPrice)
    let item = {
      id: prodId,
      price: parseFloat(prodPrice, 10),
    };

    this.cart.add(item);
  }

  get getPrice() {
    return this.price;
  }

  get getDimension() {
    let dm="";
    
    switch(this.price) {
      case "20":
        dm = "700"
        break;
      case "15":
        dm = "600"
        break;
      case "10":
        dm = "500"
        break;
      default:
        dm = "400"
    }
    
    return dm;
  }

  @action
  setPrice(newPrice) {
    this.price = newPrice;
  }

  @action
  findAuth() {
    return this.mdata.findAuthor();
  }
}
