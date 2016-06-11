(function() {
    'use strict';

    angular
        .module('chamApp')
        .controller('chamController', chamController);

    chamController.$inject = ['$scope'];

    /* @ngInject */
    function chamController($scope) {
        var vm = this;
        vm.title = 'chamController';
        vm.thingsTodo = '';
        vm.checkList = [];
        vm.addNewTodo = function () {
        	vm.checkList.push(vm.thingsTodo);
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