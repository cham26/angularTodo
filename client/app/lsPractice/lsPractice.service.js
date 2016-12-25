(function() {
  'use strict';

  angular
    .module('chamAppApp.lsPractice')
    .factory('lsPracticeService', lsPracticeService);

  lsPracticeService.$inject = ['USER_ROLES'];

  /* @ngInject */
  function lsPracticeService(USER_ROLES) {

    function authorizedAsUser() {
      let isUserRoles = USER_ROLES;
      return localStorage.getItem('currentUser') === isUserRoles.USER;
    }

    function authorizedAsAdmin() {
      return localStorage.getItem('currentUser') === isUserRoles.ADMIN;
    }

    return {
      authorizedAsUser,
      authorizedAsAdmin
    };
  }
})();

