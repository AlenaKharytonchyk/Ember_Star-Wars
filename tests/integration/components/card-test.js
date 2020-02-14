import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a card with information about a hero', async function(assert) {

    this.setProperties({
      data: {
        name: 'Luke Skywalker',
        mass: 77,
      }
    });

    await render(hbs`<Card  @data={{this.data}} />`);
    assert.dom('div').hasClass('card');
    assert.dom('img').hasClass('card-img-top');
    assert.dom('h5.card-title').includesText('Luke Skywalker');
    assert.dom('p.card-text').includesText('mass: 77');
  });
});
