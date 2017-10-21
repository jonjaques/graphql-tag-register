const assert = require('chai').assert;
const path = require('path');
const register = require('./index');

describe('register', () => {
  const fPath = './test-fixture.graphql'

  it('register fn contract satisfied', () => {
    assert.typeOf(register, 'function', 'register function');
    let unregister = register();
    assert.typeOf(unregister, 'function', 'unregister function');
    unregister();
  });

  it('patches require to read .graphql files', () => {
    let unregister = register();
    let query = require(fPath);
    assert.ok(query, 'works');
    assert.equal(query.kind, 'Document', 'should be a Document');
    assert.isArray(query.definitions, 'should have definitions');
    unregister();
  });

  it('unregister stops reading .graphql files', () => {
    let unregister = register();
    let query = require(fPath);
    assert.ok(query, 'works');
    unregister();
    query = null;
    delete require.cache[path.resolve(fPath)]
    try {
      query = require(fPath);
    } catch (err) {}
    assert.equal(query, null, 'should be null');
  });
});
