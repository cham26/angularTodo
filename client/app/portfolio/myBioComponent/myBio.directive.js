'use strict';

angular
  .module('chamAppApp.portfolio')
  .directive('myBio', function() {
    return {
      templateUrl: 'app/portfolio/myBioComponent/myBio.html',
      restrict: 'E',
      controller: 'portfolioController',
      controllerAs: 'vm'
    };
  });
