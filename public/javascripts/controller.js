(function() {
    'use strict';

    angular
        .module('chamApp')
        .controller('chamController', chamController);

    chamController.$inject = ['$scope', 'todoService'];

    /* @ngInject */
    function chamController($scope, todoService) {
        var vm = this;
        vm.title = 'chamController';
        vm.thingsTodo = '';
        vm.checkList = todoService.getAllList();
        vm.addNewTodo = function () {
        	vm.checkList.push(vm.thingsTodo);
            console.log(vm.thingsTodo);
        }
       	vm.deleteTodo = function ( idx ) {
       		vm.checkList.splice(idx, 1);
       		console.log(idx);
       	}
        activate();

        ////////////////

        function activate() {
        }  
    }
})();