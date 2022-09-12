E2E automation tests of the Pointcare Mustang POC

## running locally
####install dependencies


```npm i```

### configuration

update _./.env_ ```PLATFORM``` var to reflect the platform you wish to run the tests against.

Options are _web_ or _mobile_


launch the _appium_ server against port _4723_

### running tests
you can run the tests using the wdio comman
ex: ```npx wdio wdio.mobile.conf.js```

the above command calls the mobile.conf file which will run the tests against the mobile device designated

in the desired capabilities. 

