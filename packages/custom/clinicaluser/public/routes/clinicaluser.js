'use strict';

angular.module('mean.clinicaluser').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('clinicaluser profile page', {
      url: '/profile',
      templateUrl: 'clinicaluser/views/index.html'
    });
  }
]);
