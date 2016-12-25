(function() {
  'use strict';

  angular
    .module('chamAppApp.lsPractice')
    .controller('lsPracticeController', lsPracticeController);

  lsPracticeController.$inject = ['lsPracticeService'];

  /* @ngInject */
  function lsPracticeController(lsPracticeService) {
    var vm = this;
    vm.title = 'lsPracticeController';
    vm.permission = lsPracticeService;
    vm.displayMessage = function() {
      if (!localStorage.getItem('currentUser')) return;
      return lsPracticeService.authorizedAsAdmin() ? 'You are Admin.' : 'You are User.';
    };
    vm.setUserRole = (role) => localStorage.setItem('currentUser', role);
  }
})();

