# #angular-hash #
Watch for hash Change

## Install ##
Install using [Bower](http://bower.io/):
```
bower install git://github.com/rodriguezc/angular-hash.git
```
## Usage ##

1. Add module angularHash to your angular app
```
var myApp = angular.module('myApp', ['angularHash']);
```

2. Inject the hashService into your controller
```
esbEyeApp.controller('MyCtrl', 'hashService', function (hashService) ...
```

3. Register callback on watch change
```
 hashService.register(function (hashObj) {
        var environment = hashObj.environment;
        var page = hashObj.page;
        ...
    });
```

4. Update the hash when needed. The callback above will be called even if the hash has the same value than before
```
   $scope.onTabSelect = function (tab) {
        hashService.update("environment", tab.environment, "page", tab.page);
    }
```






