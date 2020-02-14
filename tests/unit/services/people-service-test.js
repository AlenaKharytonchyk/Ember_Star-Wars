import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | peopleService', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:people-service');
    assert.ok(service);
  });

  test('it has expected counter', function(assert) {
    let service = this.owner.lookup('service:people-service');
    assert.equal(service.userScore, 0);
    assert.equal(service.computerScore, 0);
  });
});
