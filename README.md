# #angular-hash #
AngularJS service for watch and update URL hash

## Install ##
Install using [Bower](http://bower.io/):
```
bower install git://github.com/rodriguezc/angular-hash.git
```
## Usage ##

-Add module angularHash to your angular app
```
var myApp = angular.module('myApp', ['angularHash']);
```

-Inject the hashService into your controller
```
esbEyeApp.controller('MyCtrl', 'hashService', function (hashService) ...
```

-Register callback on URL hash change
```
 hashService.register(function (hashObj) {
        var environment = hashObj.environment;
        var page = hashObj.page;
        ...
    });
```

-Update the URL hash. The callback above will be called even if the hash has the same value than before
```
   $scope.onTabSelect = function (tab) {
        hashService.update("environment", tab.environment, "page", tab.page);
    }
```






