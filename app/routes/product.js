import Route from '@ember/routing/route';

export default class ProductRoute extends Route {
  model(params) {
    return params.photo_id;
  }
}
