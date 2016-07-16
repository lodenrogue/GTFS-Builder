angular.module('app').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider) {

			$routeProvider.
				when('/', {
					template: '<main></main>'
				}).
				when('/add/agency', {
					template: '<add-agency></add-agency>'
				}).
				when('/favicon.ico', {

				}).
				otherwise({
					redirectTo: '/'
				});
		}
	]);