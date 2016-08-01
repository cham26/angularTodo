(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .controller('ModalInstanceController', ModalInstanceController);

    ModalInstanceController.$inject = ['$scope', '$uibModalInstance', 'options'];

    /* @ngInject */
    function ModalInstanceController($scope, $uibModalInstance, options) {
        
        $scope.title = 'ModalInstanceController';
        $scope.category = options.items;
        

        $scope.ok = function(x) {
        	options.cb(x);
        	console.log(x);
        	$uibModalInstance.close($scope.category);
        };

        $scope.cancel = function() {
        	$uibModalInstance.dismiss('cancel');
        };

        activate();

        ////////////////

        function activate() {
        	console.log('checking if this works');
        }
    }
})();