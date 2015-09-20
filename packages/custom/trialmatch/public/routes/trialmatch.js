'use strict';

angular.module('mean.trialmatch').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('trialmatch home page', {
      url: '/app',
      templateUrl: 'trialmatch/views/index.html'
    }).state('trialmatch trial page', {
      url: '/trial/af03aiaj3f039',
      templateUrl: 'trialmatch/views/trial.html'
    });
  }
]);
