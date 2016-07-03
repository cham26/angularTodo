angular
    .module('app.logInApp')
    .directive("entry", function() {
		return {
			restrict: "E",
			templateUrl: "app/logIn/component/logInEntry.component.html"
		}
})

    .directive("myDatePicker", function() {
		return {
			restrict: "E",
			scope: {
				ngModel: "=",
				dateOptions: "=",
				opened: "="
			},
			link: function($scope, element, attrs) {
				$scope.open = function(event){
					console.log("open");
					event.preventDefault();
					event.stopPropagation();
					$scope.opened = true;
				};

				$scope.clear = function() {
					$scope.ngModel = null;
				};
			},
			controller: function ($scope, $http) {
  
				$scope.formData      = {};
  				$scope.formData.date = "";
  				$scope.opened        = false;
  
				//Datepicker
				$scope.dateOptions = {
				'year-format': "'yy'",
				'show-weeks' : false
	};
});
		}
})