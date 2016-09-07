(function() {
  'use strict';

  angular
    .module('chamAppApp.portfolio')
    .controller('portfolioController', portfolioController);

  portfolioController.$inject = ['$scope'];

  /* @ngInject */
  function portfolioController($scope) {
    var vm = this;
    vm.title = 'portfolioController';

    activate();

    ////////////////

    function activate() {
    }
  }
})();


// ToDo: rewrite it to constructor pattern, create an array with data (images and text)
