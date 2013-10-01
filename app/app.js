var app = angular.module("app", []);

app.controller("SimpleController", function($scope){
    $scope.message = "Hello World";
});

app.factory("SimpleService", function(){

    var service = {
        getData: function(){
            return [{
                id: 1,
                name: "Mark"
            }];
        }

    };

    return service;
});