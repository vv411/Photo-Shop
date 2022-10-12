import EmberRouter from '@ember/routing/router';
import config from 'ember-photo-shop/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('photos', { path: '/photos/:page' });
  this.route('product', { path: '/product/:photo_id' });
  this.route('shoppingCart');
});
