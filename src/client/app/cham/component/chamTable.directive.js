angular
    .module('app.chamApp')
    .directive("usersTable", function() {
		return {
			restrict: "E",
			templateUrl: "app/cham/component/chamTable.component.html"
		}
})
