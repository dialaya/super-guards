import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Header />`);
    assert.dom('header').exists();
    assert.dom('header nav').exists();
    assert.dom('header nav a.navbar-brand').hasText('Job Boards');
    assert.dom('header nav a.sign-up').hasText("S'inscrire");
    assert.dom('header nav a.sign-in').hasText("S'identifier");
  });
});
