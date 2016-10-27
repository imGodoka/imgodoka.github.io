// public/js/main.js

angular.module('lolarsenal', ['minhasDiretivas', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            templateUrl: 'partials/principal.html',
            controller: 'IndexController'
        });

        $routeProvider.otherwise({redirectTo: '/'});

    });
