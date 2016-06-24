(function() {
    'use strict';

    angular
        .module('app.chamApp')
        .controller('chamController', chamController);

    chamController.$inject = ['$scope', 'todoService'];

    /* @ngInject */
    function chamController($scope, todoService) {
        var vm = this;
        vm.title = 'chamController';
        vm.thingsTodo = '';
        vm.checkList = [];
        vm.addNewTodo = function () {
        	vm.checkList.push(vm.thingsTodo);
            console.log(vm.thingsTodo);
        }
       	vm.deleteTodo = function ( idx ) {
       		vm.checkList.splice(idx, 1);
       		console.log(idx);
       	}

        vm.dataEntered =  todoService.getAllList()
           .then(function(response) {
               vm.dataEntered = response.data;
               console.log(vm.dataEntered)
       });

        vm.hover = function () {
          console.log("This bird can indeed fly!");
        }


        activate();

        ////////////////

        function activate() {
        }  
    }
})();