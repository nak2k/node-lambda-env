const test = require('tape');
const { setEnv, unsetEnv } = require('..');
const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_REGION || 'us-west-2',
});

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
