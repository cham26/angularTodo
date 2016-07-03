angular
    .module('app.logInApp')
    .directive("entry", function() {
		return {
			restrict: "E",
			templateUrl: "app/logIn/component/logInEntry.component.html"
		}
})