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
        // // datepicker
        // vm.dt = new Date();
        // vm.options = {
        //     customClass: getDayClass,
        //     minDate: new Date(),
        //     showWeeks: true
        // };

        // vm.dateOptions = {
        //     dateDisabled: disabled,
        //     formatYear: 'yy',
        //     maxDate: new Date('+10D'),
        //     minDate: new Date(),
        //     startingDay: 1
        // };

        // // Disable weekend selection
        // vm.disabled = function(data) {
        //     vm date = data.date,
        //     mode = data.mode;
        //     returns mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        // }
        // vm.toggleMin = function() {
        //     vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
        //     vm.dateOptions.minDate = vm.inlineOptions.minDate;
        // };
        // vm.toggleMin();

        // vm.open = function() {
        //     vm.popup.opened = true;
        // };

        // vm.setDate = function(year, month, day) {
        //     vm.dt = new Date(year, month, day);
        // };

        // vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
        // vm.format = vm.formats[0];

        // vm.popup = {
        //     opened: false
        // };

        // var tomorrow = new Date();
        // tommorrow.setDate(tomorrow.getDate() + 1);
        // var afterTomorrow = new Date();
        // afterTomorrow.setDate(tomorrow.getDate() + 1);
        // vm.events = [
        //     {
        //         date: tomorrow,
        //         status: "full"
        //     },
        //     {
        //         date: afteTomorrow,
        //         status: "partially"
        //     }
        // ];

        // vm.getDayClass(data) {
        //     var date = data.date,
        //     mode = date.mode;
        //      if (mode === 'day') {
        //         cm.dayToCheck == new Date (vm.date).setHours(0,0,0,0);

        //         for (var i = 0; i < vm.events.length; i++) {
        //             var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

        //             if (dayToCheck === currentDay) {
        //                 return vm.events[i].status;
        //             }
        //         }
        //      }

        //      return '';
        // }



        activate();

        ////////////////

        function activate() {
        }  
    }
})();