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
       

        activate();

        ////////////////

        function activate() {
        }

        
    }
})();