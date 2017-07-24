const AWS = require('aws-sdk');

const setEnv = (options = {}, callback) => {
  const {
    functionName,
    env,
  } = options;

  const lambda = new AWS.Lambda();

  lambda.getFunctionConfiguration({
    FunctionName: functionName,
  }, (err, data) => {
    if (err) {
      return callback(err);
    }

    const { Environment = {} } = data;
    const { Variables = {} } = Environment;

    Object.assign(Variables, env);

    lambda.updateFunctionConfiguration({
      FunctionName: functionName,
      Environment: {
        Variables,
      },
    }, (err, data) => {
      if (err) {
        return callback(err);
      }

      callback(null, data.Environment.Variables);
    });
  });
};

const unsetEnv = (options = {}, callback) => {
  const {
    functionName,
  } = options;

  let { env } = options;

  if (!Array.isArray(env)) {
    env = Object.keys(env);
  }

  const lambda = new AWS.Lambda();

  lambda.getFunctionConfiguration({
    FunctionName: functionName,
  }, (err, data) => {
    if (err) {
      return callback(err);
    }

    const { Environment = {} } = data;
    const { Variables = {} } = Environment;

    env.forEach(name => delete Variables[name]);

    lambda.updateFunctionConfiguration({
      FunctionName: functionName,
      Environment: {
        Variables,
      },
    }, (err, data) => {
      if (err) {
        return callback(err);
      }

      callback(null, data.Environment.Variables);
    });
  });
};

/*
 * Exports.
 */
exports.setEnv = setEnv;
exports.unsetEnv = unsetEnv;
