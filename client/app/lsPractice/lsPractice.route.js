'use strict';

angular.module('chamAppApp.lsPractice')
  .config(function($stateProvider) {
    $stateProvider.state('lsPractice', {
      url: '/lsPractice',
      templateUrl: 'app/lsPractice/lsPractice.html',
      controller: 'lsPracticeController',
      controllerAs: 'vm'
    })
      .state('permissionCheck', {
        url: '/permissionCheck',
        templateUrl: 'app/lsPractice/permissionCheck.html',
        controller: 'lsPracticeController',
        controllerAs: 'vm'
      })
      .state('userOnlyPage', {
        url: '/userOnlyPage',
        templateUrl: 'app/lsPractice/userOnly.html',
        controller: 'lsPracticeController',
        controllerAs: 'vm'
      })
      .state('adminOnlyPage', {
        url: '/adminOnlyPage',
        templateUrl: 'app/lsPractice/adminOnly.html',
        controller: 'lsPracticeController',
        controllerAs: 'vm'
      });
  });
