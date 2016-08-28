(function() {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .controller('shiftModalController', shiftModalController);

  shiftModalController.$inject = ['$uibModalInstance'];

  /* @ngInject */
  function shiftModalController($uibModalInstance) {
    var vm = this;
    vm.title = 'shiftModalController';
    vm.shiftDays = shiftDays;
    vm.selected = {
      shift: vm.shiftDays[0]
    };
    vm.ok = function() {
      $uibModalInstance.close(vm.selected.shift);
    };

    vm.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    activate();

    ////////////////

    function activate() {
      console.log('checking if this works');
    }
  }
})();
