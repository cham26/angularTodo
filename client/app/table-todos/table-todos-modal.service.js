(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .factory('ModalService', ModalService);

    ModalService.$inject = ['$uibModal', '$log'];

    /* @ngInject */
    function ModalService($uibModal, $log) {
    	var vm = this;
    	vm.animationsEnabled = true;
    	vm.open = function (items, size, cb) {
    		var options = {},
    		options.cb = cb || angular.noop,
    		options.items = items;
    	var modalInstance = $uibModal.open({
		      animation: vm.animationsEnabled,
		      templateUrl: 'app/table-todos/myModalContent.html',
		      controller: 'ModalInstanceController',
		      size: size,
		      resolve: {
        		options: function () {
          		return options;
        	}
      	}
      });
    
        

        

        ////////////////
        var ModalService = {
            open: vm.open
        };
        return ModalService.result;
        
    };
})();