# lambda-env

Configure environment variables for AWS Lambda.

## Installation

```
npm i lambda-env -S
```

## Usage

``` javascript
const { setEnv, unsetEnv } = require('lambda-env');

setEnv({
  functionName: 'Sandbox',
  env: {
    TEST: 'test',
  },
}, (err, env) => {
});

unsetEnv({
  functionName: 'Sandbox',
  env: ['TEST'],
}, (err, env) => {
});
```

## API

### setEnv(options, callback)

- `options.functionName`
    - A name of a lambda function.
- `options.env`
    - An object that specify environment variables of a lambda function.
    - If environment variables of a lambda function are configured, this object is merged into an existing configuration.
- `callback(err, env)`
    - A callback which is called when environment variables setting is succeed, or an error occurs.

### unsetEnv(options, callback)

- `options.functionName`
    - A name of a lambda function.
- `options.env`
    - An array that has names of environment variables to be removed.
- `callback(err, env)`
    - A callback which is called when environment variables setting is succeed, or an error occurs.

## License

MIT
