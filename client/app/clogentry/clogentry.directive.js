'use strict';

angular
    .module('chamAppApp.clogentry')
    .directive('logInEntry', function() {
		return {
			templateUrl: 'app/clogentry/clogentry.html',
			restrict: 'E',
			controller: 'ClogentryController',
    		controllerAs: 'vm'
		};
});

