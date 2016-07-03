angular
    .module('app.chamApp')
    .directive("table", function() {
		return {
			restrict: "E",
			templateUrl: "app/cham/component/chamTable.component.html"
		}
})
