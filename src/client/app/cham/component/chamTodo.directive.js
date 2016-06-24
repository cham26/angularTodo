angular
    .module('app.chamApp')
    .directive("catalog", function() {
		return {
			restrict: "E",
			templateUrl: "app/cham/component/chamTodo.component.html"
		}
})

	.directive("hovering", function() {
			return function(scope, element, attrs) {
				element.bind("mouseenter", function () {
					scope.$apply(attrs.hovering);
				})
			}
	})