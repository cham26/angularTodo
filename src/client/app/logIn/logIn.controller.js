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
        vm.validateForm = function() {
            console.log(vm.user);
        }
        //datepicker
        vm.isDatePickerOpen = false;
       
        vm.minDate = new Date();
        vm.maxDate = new Date();
        vm.maxDate.setDate(vm.minDate.getDate() +10);
        console.log(vm.minDate);
        console.log(vm.maxDate)
        
        
       
        
          
       


        



        activate();

        ////////////////

        function activate() {
        }  
    }
})();