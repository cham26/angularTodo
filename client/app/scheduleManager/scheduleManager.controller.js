(function () {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .controller('scheduleManagerController', scheduleManagerController);

  scheduleManagerController.$inject = ['scheduleManagerService', '$scope', 'NAME_OF_DAYS', 'ModalService'];

  /* @ngInject */
  function scheduleManagerController(scheduleManagerService, $scope, NAME_OF_DAYS, ModalService) {
    $scope.nameOfDays = NAME_OF_DAYS;
    var vm = this;
    vm.title = 'scheduleManagerController';
    vm.scheduleData = scheduleManagerService.getScheduleTable()
      .then(function (response) {
        vm.scheduleData = response.data;
      });
    vm.openScheduleModal = function(){
      let template = '/components/chamModal/views/shiftModal.html';
      ModalService.open(null, template, 'lg', function(result) {
        console.log(result);
      })
    };
    activate();

    ////////////////

    function activate() {
    }
  }
})();


