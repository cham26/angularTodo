(function () {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .service('shiftModalService', shiftModalService);

  shiftModalService.$inject = ['$uibModal', '$log'];

  /* @ngInject */
  function shiftModalService($uibModal, $log) {
    var vm = this;
    vm.shiftDays = [
      {
        shiftName: 'Day'
      },
      {
        shiftName: 'Evening'
      },
      {
        shiftName: 'Graveyard'
      },
      {
        shiftName: 'Off'
      },
      {
        shiftName: 'Leave'
      },
    ];
    vm.animationsEnabled = true;
    vm.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'app/scheduleManager/shiftModal.html',
        controller: 'scheduleManagerController',
        controllerAs: 'vm',
        size: size,
        resolve: {
          shiftDays: function() {
            console.log(shiftDays)
            return vm.shiftDays;
          }
        }
      });

      // modalInstance.result.then(function (selectedShift) {
      //   vm.selected = selectedShift;
      // }, function(){
      //   $log.info('Modal dismissed at: '+ new Date());
      // });

      vm.toggleAnimation = function () {
        vm.animationsEnabled = !vm.animationsEnabled;
      };

      ////////////////
      return shiftModalService.result;

    };
    return {
      open: vm.open
    };

  };

})();
