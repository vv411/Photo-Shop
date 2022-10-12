import { module, test } from 'qunit';
import { setupTest } from 'ember-photo-shop/tests/helpers';

module('Unit | Controller | shopping-cart', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:shopping-cart');
    assert.ok(controller);
  });
});
