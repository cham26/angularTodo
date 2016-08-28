(function () {
  'use strict';

  angular
    .module('chamAppApp.table-todos')
    .service('ModalService', ModalService);

  ModalService.$inject = ['$uibModal', '$log'];

  /* @ngInject */
  function ModalService($uibModal, $log) {
    var vm = this;
    vm.animationsEnabled = true;
    vm.open = function (items, template, size, cb) {
      var options = {};
      options.cb = cb || angular.noop;
      options.items = items;

      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: template,
        controller: 'ModalInstanceController',
        size: size,
        resolve: {
          options: function () {
            console.log(options)
            return options;
          }
        }
      });

      ////////////////
      return ModalService.result;
    };
    return {
      open: vm.open
    };
  };

})();
