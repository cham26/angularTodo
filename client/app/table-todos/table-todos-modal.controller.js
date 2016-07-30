(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$scope', '$uibModal', 'items'];

    /* @ngInject */
    function ModalController($scope, $uibModal, items) {
        
        $scope.title = 'ModalController';
        $scope.category = items;

        $scope.ok = function() {
        	$uibModal.close();
        };

        $scope.cancel = function() {
        	$uibModal.dismiss('cancel');
        };

        activate();

        ////////////////

        function activate() {
        	console.log('checking if this works');
        }
    }
})();