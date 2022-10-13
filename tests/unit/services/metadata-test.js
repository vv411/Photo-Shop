import { module, test } from 'qunit';
import { setupTest } from 'ember-photo-shop/tests/helpers';

module('Unit | Service | metadata', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:metadata');
    assert.ok(service);
  });
});
