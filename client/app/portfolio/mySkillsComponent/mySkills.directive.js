'use strict';

angular
  .module('chamAppApp.portfolio')
  .directive('mySkills', function() {
    return {
      templateUrl: 'app/portfolio/mySkillsComponent/mySkills.html',
      restrict: 'E',
      controller: 'portfolioController',
      controllerAs: 'vm'
    };
  });

// ToDo: add controller using constructor pattern for example see controller on main.js,
//       pass through isolated scope data from portfolio controller, scope includes: array with images (use for skills)
//           and text
