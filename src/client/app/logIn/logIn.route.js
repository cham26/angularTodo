(function() {
  'use strict';

  angular
    .module('app.logInApp')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'logIn',
        config: {
          url: '/logIn',
          templateUrl: 'app/logIn/logIn.html',
          controller: 'logInController',
          controllerAs: 'vm',
          title: 'logIn',
          settings: {
            nav: 4,
            content: '<i class="fa fa-lock"></i> LogIn'
          }
        } 
      }
    ];
  }
})();
