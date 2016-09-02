(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .controller('ModalInstanceController', ModalInstanceController);

    ModalInstanceController.$inject = ['$scope', '$uibModalInstance', 'options', 'SHIFT_NAMES'];

    /* @ngInject */
    function ModalInstanceController($scope, $uibModalInstance, options, SHIFT_NAMES) {

        $scope.title = 'ModalInstanceController';

        $scope.getColor = function(x) {
          switch(x) {
            case 'D': return 'scheduleDayButton';
            case 'N': return 'scheduleNightButton';
            case 'G': return 'scheduleGraveyardButton';
            case 'O': return 'scheduleOffButton';
            case 'L': return 'scheduleLeaveButton';
          }
        };

        $scope.item = options.items;
        $scope.ok = function(x) {
        	options.cb(x);
        	console.log(x);
        	$uibModalInstance.close($scope.item);
        };

        $scope.cancel = function() {
        	$uibModalInstance.dismiss('cancel');
        };
        $scope.shiftTitle = SHIFT_NAMES;
        $scope.chooseShift = function(value) {
          console.log('hi');
          if (value === SHIFT_NAMES.MORNING.shortcut) {
            return $scope.text = 'Day Shift';
          } else if (value === SHIFT_NAMES.NIGHT.shortcut) {
            return $scope.text = 'Night Shift';
          } else if (value === SHIFT_NAMES.GRAVEYARD.shortcut) {
              return $scope.text = 'Graveyard Shift';
          } else if (value === SHIFT_NAMES.OFF.shortcut) {
              return $scope.text = 'Off';
          } else if (value === SHIFT_NAMES.LEAVE.shortcut) {
              return $scope.text = 'Leave';
          }

        };

        activate();

        ////////////////

        function activate() {
        	console.log('checking if this works');
        }
    }
})();
