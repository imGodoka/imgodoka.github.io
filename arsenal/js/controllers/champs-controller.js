// public/js/controllers/champs-controller.js

angular.module('arsenalapp').controller('ChampsController', function($scope, $http) {

    var api = 'https://global.api.pvp.net/api/lol/static-data/br/v1.2/champion?champData=image,info,tags&api_key=5d4fb5f7-a5dc-42d5-8b68-bc37a716bb6d';

    $scope.champs = [];
    $scope.champsTag = [];
    $scope.categoryFilter = ' ';

    $http.get(api)
    .success(function(retorno){
      var temp = [];
      angular.forEach(retorno.data, function(value, key){
        this.push(value);
        value.tags.splice(1, 1);
      }, temp);
      $scope.champs = temp;
    })
    .error(function(err){
      console.log(err);
    });

    $scope.filterMe = function(arg) {
      $scope.categoryFilter = arg;
    }

});
