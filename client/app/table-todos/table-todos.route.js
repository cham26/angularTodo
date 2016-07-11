'use strict';

angular.module('chamAppApp.table-todos')
  .config(function($stateProvider) {
    $stateProvider.state('table-todos', {
      url: '/table-todos',
      templateUrl: 'app/table-todos/table-todos.html',
      controller: 'TableTodosController',
      controllerAs: 'vm'
    });
  });