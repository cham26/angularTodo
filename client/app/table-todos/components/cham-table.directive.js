'use strict';

angular
    .module('chamAppApp.table-todos')
    .directive('usersTable', function() {
		return {
			templateUrl: 'app/table-todos/components/cham-table.components.html',
			restrict: 'E',
			controller: 'TableTodosController',
    		controllerAs: 'vm'
		};
});
