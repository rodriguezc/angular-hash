var angularHash = angular.module('angularHash', []);

angularHash.factory('hashService', ['$rootScope', '$location', function ($rootScope, $location) {

    var hashService = {};

    hashService.broadcastHashChange = function (hashValue) {
        var hashObj = {};
        hashValue = decodeURIComponent(hashValue);
        var hashValueCorrected = "";
        for (var i = 0; i < hashValue.length; i++) {
            if (hashValue[i] != "#") {
                hashValueCorrected += hashValue[i];
            }
        }
        //Parse parameters
        var parameters = hashValueCorrected.split("&");
        for (var i = 0; i < parameters.length; i++) {
            var parameter = parameters[i];
            var paramNameValue = parameter.split("=");
            hashObj[paramNameValue[0]] = paramNameValue[1];
        }
        $rootScope.$broadcast("hashChange", hashObj);
    };

    hashService.update = function () {
        var newHash ="";
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                if (i % 2 == 1) {
                    var paramName = arguments[i - 1];
                    var paramValue = arguments[i];
                    if(i != 1) {
                        newHash+="&"
                    }
                    newHash+=paramName+"="+paramValue;
                }
            }
        }

        if(newHash == hashService.lastHash) {
            hashService.broadcastHashChange(newHash);
        } else {
            hashService.lastHash = newHash;
            $location.hash(newHash);
        }
    };

    //Create event on hash   change
    $rootScope.$watch(function () {
        return location.hash
    }, function (hashValue) {
        hashService.broadcastHashChange(hashValue);
    });

    // factory function body that constructs shinyNewServiceInstance
    return hashService;
}]);