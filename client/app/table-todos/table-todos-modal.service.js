(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$uibModal', '$log'];

    /* @ngInject */
    function ModalService($uibModal, $log) {
    	var vm = this;
    	var items = [];
    	vm.animationsEnabled = true;
    	vm.open = function (size) {
    	var modalInstance = $uibModal.open({
		      animation: vm.animationsEnabled,
		      templateUrl: 'app/table-todos/myModalContent.html',
		      controller: 'ModalController',
		      size: size,
		      resolve: {
        		items: function () {
          		return items;
        	}
      	}
      });
    
        modalInstance.result.then(function() {
        	console.log('test');
        });
      };

        vm.toggleAnimation = function() {
        	vm.animationsEnabled = !vm.animationsEnabled;
        };

        ////////////////
        var ModalService = {
            open: vm.open
        };
        return ModalService;
        
    };
})();