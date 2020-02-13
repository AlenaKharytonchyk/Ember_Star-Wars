import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | battle-field', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a people battle card', async function(assert) {

    await render(hbs`<BattleFieldStarships />`);

    assert.dom('section').hasClass('score');
    assert.dom('h4').exists({count: 2});
    assert.dom('ul').hasClass('results');
    assert.dom('.player-card div').isVisible();
    assert.dom('.computer-card div').isVisible();
  });
});
