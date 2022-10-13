import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CartContentsComponent extends Component {
  @service('metadata') mdata;

  //Pass in the photo metadata to be shown in the product page
  @action
  setMetaData(item) {
    this.mdata.setData(item);
  }
}
