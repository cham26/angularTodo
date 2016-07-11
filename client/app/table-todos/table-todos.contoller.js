(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .controller('TableTodosController', TableTodosController);

    TableTodosController.$inject = ['$scope', 'TodoService'];

    /* @ngInject */
    function TableTodosController($scope, TodoService) {
        var vm = this;
        vm.title = 'TableTodosController';
        vm.thingsTodo = '';
        vm.checkList = [];
        vm.addNewTodo = function () {
        	vm.checkList.push(vm.thingsTodo);
            console.log(vm.thingsTodo);
        };
       	vm.deleteTodo = function ( idx ) {
       		vm.checkList.splice(idx, 1);
       		console.log(idx);
       	};

        vm.dataEntered = TodoService.getAllList()
           .then(function(response) {
               vm.dataEntered = response.data;
               console.log(vm.dataEntered);
       });

        vm.hover = function () {
          console.log('This bird can indeed fly!');
        };

        vm.bacteria = function($scope) {
          $scope.nameOfBacteria = [];

          vm.saySalmonella = function() {
            $scope.nameOfBacteria.push('I cause Food poisoning!');
          };

          vm.sayPseudomonas = function() {
            $scope.nameOfBacteria.push('I can cause Septic shock!');
          };

          vm.sayInfluenza = function() {
            $scope.nameOfBacteria.push('Im responsible for your flu!');
          };
        };


        activate();

        ////////////////

        function activate() {
        }  
    }
})();