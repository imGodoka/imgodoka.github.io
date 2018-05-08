// public/js/controllers/champs-controller.js

angular.module('arsenalapp').controller('ChampsController', function($scope, $http) {

  var api = 'https://ddragon.leagueoflegends.com/cdn/8.9.1/data/pt_BR/champion.json';

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
