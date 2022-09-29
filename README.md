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

### generating reports

upon running the tests a directory should have been generated at root
called allure-report.

install allure commandline

```npm install -g allure-commandline```


to generate a report run the following command
```allure generate <\directory where you would like results stored\> --clean```


in the following example the results are stored in the project root in a directory called 'allure-results':

```allure generate .\allure-results\ --clean```

to run the allure server and view results 

```allure open ```

