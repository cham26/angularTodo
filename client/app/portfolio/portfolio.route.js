/**
 * Created by AMSTERDAM on 9/6/2016.
 */
'use strict';

angular.module('chamAppApp.portfolio')
  .config(function($stateProvider) {
    $stateProvider.state('portfolio', {
      url: '/portfolio',
      templateUrl: 'app/portfolio/portfolio.html',
      controller: 'PortfolioController',
      controllerAs: '$ctrl'
    });
  });
