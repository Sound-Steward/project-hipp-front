import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | requests/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:requests/new');
    assert.ok(route);
  });
});
