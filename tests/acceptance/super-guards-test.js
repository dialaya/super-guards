import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super guards', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /super-guards', async function(assert) {
    await visit('/super-guards');

    assert.equal(currentURL(), '/super-guards');
  });
});
