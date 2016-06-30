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
        vm.user = [];
        vm.userName = "";
        vm.userEmail = "";
        vm.userCash = "";
        vm.validateForm = function() {
            vm.user.push(vm.userName, vm.userEmail, vm.userCash);
            console.log(vm.user);
        }
        activate();

        ////////////////

        function activate() {
        }  
    }
})();