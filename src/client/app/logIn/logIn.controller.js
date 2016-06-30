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
        vm.userName = "";
        vm.userEmail = "";
        vm.userCash = "";
        vm.validateForm = function() {
            console.log(vm.userName, vm.userEmail, vm.userCash);
        }
        activate();

        ////////////////

        function activate() {
        }  
    }
})();