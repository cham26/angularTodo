'use strict';

angular.module('chamAppApp.design')
  .config(function($stateProvider) {
    $stateProvider.state('design', {
      url: '/design',
      templateUrl: 'app/design/design.html',
      controller: 'DesignController',
      controllerAs: 'vm'
    });
  });
