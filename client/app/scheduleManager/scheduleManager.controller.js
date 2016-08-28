(function () {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .controller('scheduleManagerController', scheduleManagerController);

  scheduleManagerController.$inject = ['scheduleManagerService', '$scope', 'REP_NAME_OF_DAYS', 'shiftModalService'];

  /* @ngInject */
  function scheduleManagerController(scheduleManagerService, $scope, REP_NAME_OF_DAYS, shiftModalService) {
    $scope.nameOfDays = REP_NAME_OF_DAYS;
    var vm = this;
    vm.title = 'scheduleManagerController';
    vm.backendSchedule = scheduleManagerService.getScheduleTable()
      .then(function (response) {
        vm.backendSchedule = response.data;
      });
    vm.shiftModal = function() {
      shiftModalService.open('lg', function() {

      });
    };

    activate();

    ////////////////

    function activate() {
    }
  }
})();


