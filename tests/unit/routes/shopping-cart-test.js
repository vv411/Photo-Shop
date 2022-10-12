import { module, test } from 'qunit';
import { setupTest } from 'ember-photo-shop/tests/helpers';

module('Unit | Route | shoppingCart', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:shopping-cart');
    assert.ok(route);
  });
});
