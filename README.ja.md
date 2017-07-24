# lambda-env

AWS Lambda の環境変数を設定するパッケージ。

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
    - Lambda 関数名。
- `options.env`
    - Lambda 関数の環境変数を指定するオブジェクト。
    - Lambda 関数の環境変数が設定済みの場合、このオブジェクトは既存の設定にマージされる。
- `callback(err, env)`
    - 環境変数設定が成功した時、あるいはエラーが起きた時に呼ばれるコールバック関数。

### unsetEnv(options, callback)

- `options.functionName`
    - Lambda 関数名。
- `options.env`
    - 削除される環境変数の名前の配列。
- `callback(err, env)`
    - 環境変数設定が成功した時、あるいはエラーが起きた時に呼ばれるコールバック関数。

## License

MIT
