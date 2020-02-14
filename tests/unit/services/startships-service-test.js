import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | startships-service', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:startships-service');
    assert.ok(service);
  });
});
