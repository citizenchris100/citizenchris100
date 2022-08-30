E2E automation tests of the Pointcare Mustang POC

## running locally
####install dependencies


```npm i```

### configuration

update _./.env_ ```PLATFORM``` var to reflect the platform you wish to run the tests against.

Options are _web_ or _mobile_


launch the _appium_ server against port _4723_

### running tests
you can run the tests against the platform of your choice by entering either

```npm run mobile_test``` to test against a mobile device

or

```npm run web_test``` to test against chrome

