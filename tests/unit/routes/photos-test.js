import { module, test } from 'qunit';
import { setupTest } from 'ember-photo-shop/tests/helpers';

module('Unit | Route | photos', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:photos');
    assert.ok(route);
  });
});
