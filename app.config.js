angular.module('app').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider, $routeParams) {

			$routeProvider.
				when('/', {
					template: '<main></main>'
				}).
				when('/add/:feed', {
					template: '<add-feed></add-feed>'
				}).
				when('/favicon.ico', {

				}).
				otherwise({
					redirectTo: '/'
				});
		}
	]);