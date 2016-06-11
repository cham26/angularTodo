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
        vm.cham = 'naughty girl';
        vm.food = 'Apple';
        vm.addNewTodo = function () {
        	vm.savedValue = vm.food;
        	console.log(vm.food);
        }

        activate();

        ////////////////

        function activate() {
        	console.log(vm.title);
        }

        
    }
})();