'use strict';

(function () {

  class PortfolioController {

    constructor($scope) {
      this.$scope = $scope;
      this.$scope.skillsIcon = [
        html = {
          src: "\assets\images\skills\html.png",
          caption: 'lorem lorem lorem'
        },
        css = {
          scr: "\assets\images\skills\css.png",
          caption: 'hello hello hello'
        },
        angular = {
          scr: "\assets\images\skills\angular.png",
          caption: 'world world world'
        },
        git = {
          scr: "\assets\images\skills\git.png",
          caption: 'happy happy happy'
        },
        bootstrap = {
          scr: "\assets\images\skills\bootstrap.png",
          caption: 'banana banana banana'
        },
        heroku = {
          scr: "\assets\images\skills\heroku.png",
          caption: 'sky sky sky'
        },
      ];
    }
  }
  ;
  angular.module('chamAppApp.portfolio')
    .component('portfolio', {
      templateUrl: 'app/portfolio/portfolio.html',
      controller: PortfolioController
    });
})();


// ToDo: rewrite it to constructor pattern, create an array with data (images and text)
