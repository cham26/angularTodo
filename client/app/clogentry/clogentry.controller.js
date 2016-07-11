(function() {
    'use strict';

    angular
        .module('chamAppApp.clogentry')
        .controller('ClogentryController', ClogEntryController);

    ClogEntryController.$inject = ['$scope'];

    /* @ngInject */
    function ClogEntryController($scope) {
        var vm = this;
        vm.title = 'ClogentryController';
        vm.user = {};
        vm.validateForm = function() {
            console.log(vm.user);
        };
        //datepicker
        vm.isDatePickerOpen = false;
       
        vm.minDate = new Date();
        vm.maxDate = new Date();
        vm.maxDate.setDate(vm.minDate.getDate() +10);
        console.log(vm.minDate);
        console.log(vm.maxDate);

        activate();

        ////////////////

        function activate() {
        }  
    }
})();