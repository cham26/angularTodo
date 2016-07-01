(function() {
    'use strict';

    angular
        .module('app.logInApp')
        .controller('logInController', logInController);

    logInController.$inject = ['$scope'];

    /* @ngInject */
    function logInController($scope) {
        var vm = this;
        vm.title = 'logInController';
        vm.user = {};
        vm.user.name = '';
        vm.user.email = '';
        vm.user.cash = '';
        vm.validateForm = function() {
            console.log(vm.user);
        }
        activate();

        ////////////////

        function activate() {
        }  
    }
})();