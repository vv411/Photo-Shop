import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ProductPageComponent extends Component {
  @service('shopping-cart') cart;
}
