'use strict';

angular
    .module('chamAppApp.table-todos')
    .directive('todosCatalog', function() {
		return {
			templateUrl: 'app/table-todos/components/cham-todo.components.html',
			restrict: 'E',
			controller: 'TableTodosController',
    		controllerAs: 'vm'
		};
})

	.directive('hovering', function() {
 			return function(scope, element, attrs) {
 				element.bind('mouseenter', function () {
 					scope.$apply(attrs.hovering);
 				});
 			};
 	})

	.directive('germs', function() {
		return {
			restrict: 'E',
			scope: {},
			link: function (scope, element, germs) {
				element.bind('mouseenter', function() {
					console.log(scope.nameOfBacteria);
				});
			},

			controller: function ($scope) {
		          $scope.nameOfBacteria = [];

		          this.saySalmonella = function() {
		            $scope.nameOfBacteria.push('I cause Food poisoning!');
		          };

		          this.sayPseudomonas = function() {
		            $scope.nameOfBacteria.push('I can cause Septic shock!');
		          };

		          this.sayInfluenza = function() {
		            $scope.nameOfBacteria.push('Im responsible for your flu!');
		          };
		        }
			};

		})

// directive talking to drective

	.directive('salmonella', function() {
		return {
			require: 'germs',
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.saySalmonella();
			}
		};
	})

	.directive('pseudomonas', function() {
		return {
			require: 'germs',
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.sayPseudomonas();
			}
		};
	})

	.directive('influenza', function() {
		return {
			require: 'germs',
			link: function (scope, element, attrs, germsCtrl) {
				germsCtrl.sayInfluenza();
			}
		};
	});
	