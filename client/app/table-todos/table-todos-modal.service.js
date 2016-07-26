(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$uibModal'];

    /* @ngInject */
    function ModalService($uibModal) {
    	var vm = this;
    	vm.open = function (size) {
    	vm.items = [];
    	var modalInstance = $uibModal.open({
		      animation: true,
		      templateUrl: 'myModalContent.html',
		      controller: function ($uibModalInstance) {
				  vm.ok = function () {
				    $uibModalInstance.close();
				  };

				  vm.cancel = function () {
				    $uibModalInstance.dismiss('cancel');
				  };
			  },
		      size: size,
		      resolve: {
        		items: function () {
          		return vm.items;
        	}
      	}
      })
    };
        var ModalService = {
            open: vm.open
        };
        return ModalService;

        ////////////////

        
    };
})();