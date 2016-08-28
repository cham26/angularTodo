'use strict';

angular.module('chamAppApp.scheduleManager')
  .config(function($stateProvider) {
    $stateProvider.state('scheduleManager', {
      url: '/scheduleManager',
      templateUrl: 'app/scheduleManager/scheduleManager.html',
      controller: 'scheduleManagerController',
      controllerAs: 'vm'
    });
  });
