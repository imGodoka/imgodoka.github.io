angular.module('imgodokapp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'base.html',
			controller: 'IndexController'

		$routeProvider.otherwise({redirectTo: '/'});

	});
