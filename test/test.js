const test = require('tape');
const { setEnv, unsetEnv } = require('..');
const AWS = require('aws-sdk');

test('test', t => {
  t.plan(4);

  setEnv({
    functionName: 'Sandbox',
    env: {
      TEST: 'test',
    },
  }, (err, env) => {
    t.error(err);
    t.equal(env.TEST, 'test');

    unsetEnv({
      functionName: 'Sandbox',
      env: ['TEST'],
    }, (err, env) => {
      t.error(err);
      t.equal(env.TEST, undefined);
    });
  });
});
