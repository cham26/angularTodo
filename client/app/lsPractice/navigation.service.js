(function() {
  'use strict';

  angular
    .module('chamAppApp.lsPractice')
    .factory('navigationService', navigationService);

  navigationService.$inject = ['lsPracticeService', '$state'];

  /* @ngInject */
  function navigationService(lsPracticeService, $state) {

    function goToProfile() {
      let isAdmin = lsPracticeService.authorizedAsAdmin();
      if (!localStorage.getItem('currentUser')) {
        alert ('Please specify role.');
      }
      else if (isAdmin) {
        return $state.go('adminOnlyPage');
      }
      else {
        return $state.go('userOnlyPage');
      }
    }

    // function goToProfile() {
    //   var isAdmin = lsPracticeService.authorizedAsAdmin();
    //   if (!localStorage.getItem('currentUser')) return alert ('Please specify role.');
    //   isAdmin ? $state.go('adminOnlyPage') : $state.go('userOnlyPage');
    // }

    return {
      goToProfile
    };
  }
})();


