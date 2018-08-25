# GoaCoin Message Verification and Signing for Bitcore-GoaCoin


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-goacoin.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-goacoin)
[![Build Status](https://img.shields.io/travis/goacoincore/bitcore-message-goacoin.svg?branch=master&style=flat-square)](https://travis-ci.org/goacoincore/bitcore-message-goacoin)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-goacoin.svg?style=flat-square)](https://coveralls.io/r/goacoincore/bitcore-message-goacoin?branch=master)

bitcore-message-goacoin adds support for verifying and signing goacoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-goacoin repo](https://github.com/goacoincore/bitcore-goacoin) for more information.

## Getting Started

```sh
npm install bitcore-message-goacoin
```

```sh
bower install bitcore-message-goacoin
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-goacoin');
var Message = require('bitcore-message-goacoin');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/goacoincore/bitcore-goacoin/blob/master/CONTRIBUTING.md) on the main bitcore-goacoin repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

