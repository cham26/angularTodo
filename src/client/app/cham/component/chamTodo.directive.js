angular
    .module('app.chamApp')
    .directive("catalog", function() {
		return {
			restrict: "E",
			templateUrl: "app/cham/component/chamTodo.component.html"
		}
})
