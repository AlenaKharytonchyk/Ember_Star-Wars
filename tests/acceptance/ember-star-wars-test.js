import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember star wars', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('Home');
    assert.dom('h2').hasText('Welcome to the Star Wars world!');

    assert.dom('.jumbo a.button').hasText('People');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/people');
  });

  test('navigating using the nav-bar', async function(assert) {
    await visit('/');

    assert.dom('nav').exists();
    assert.dom('nav a.menu-index').hasText('Home');
    assert.dom('nav a.menu-people').hasText('People');
    assert.dom('nav a.menu-starships').hasText('Starships');

    await click('nav a.menu-people');
    assert.equal(currentURL(), '/people');

    await click('nav a.menu-starships');
    assert.equal(currentURL(), '/starships');

    await click('nav a.menu-index');
    assert.equal(currentURL(), '/');
  });
});
