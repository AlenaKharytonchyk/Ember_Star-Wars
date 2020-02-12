import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to the Star Wars world!');

    assert.dom('.jumbo a.button').hasText('People');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/people');
  });
});
