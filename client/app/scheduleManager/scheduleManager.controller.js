(function () {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .controller('scheduleManagerController', scheduleManagerController);

  scheduleManagerController.$inject = ['scheduleManagerService', '$scope', 'NAME_OF_DAYS', 'SHIFT_NAMES', 'ModalService'];

  /* @ngInject */
  function scheduleManagerController(scheduleManagerService, $scope, NAME_OF_DAYS, SHIFT_NAMES, ModalService) {
    $scope.nameOfDays = NAME_OF_DAYS;
    var vm = this;
    vm.title = 'scheduleManagerController';
    vm.scheduleData = scheduleManagerService.getScheduleTable()
      .then(function (response) {
        vm.scheduleData = response.data;
      });
    vm.namesOfShift = SHIFT_NAMES;
    vm.openScheduleModal = function (dayOfWeek){
      let popupArgs = {
        selectedDay: dayOfWeek,
        shiftName: SHIFT_NAMES
      };
      let template = '/components/chamModal/views/shiftModal.html';
      ModalService.open(popupArgs, template, 'lg', function(result) {
        console.log(result);
      })
    };
    activate();

    ////////////////

    function activate() {
    }
  }
})();


