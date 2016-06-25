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

	.directive("germs", function() {
		return {
			restrict: "E",
			scope: {},
			link: function (scope, element, germs) {
				element.bind("mouseenter", function() {
					console.log(scope.nameOfBacteria);
				})
			},

			controller: function ($scope) {
		          $scope.nameOfBacteria = [];

		          this.saySalmonella = function() {
		            $scope.nameOfBacteria.push("I cause Food poisoning!");
		          };

		          this.sayPseudomonas = function() {
		            $scope.nameOfBacteria.push("I can cause Septic shock!");
		          };

		          this.sayInfluenza = function() {
		            $scope.nameOfBacteria.push("Im responsible for your flu!");
		          };
		        }
			}

		})

// directive talking to drective

	.directive("salmonella", function() {
		return {
			require: "germs",
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.saySalmonella();
			}
		}
	})

	.directive("pseudomonas", function() {
		return {
			require: "germs",
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.sayPseudomonas();
			}
		}
	})

	.directive("influenza", function() {
		return {
			require: "germs",
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.sayInfluenza();
			}
		}
	})
	