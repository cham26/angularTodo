(function() {
  'use strict';

  angular
    .module('app.chamApp')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'cham',
        config: {
          url: '/cham',
          templateUrl: 'app/cham/cham.html',
          controller: 'chamController',
          controllerAs: 'vm',
          title: 'cham'
        } 
      }
    ];
  }
})();
