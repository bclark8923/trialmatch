'use strict';

/* jshint -W098 */
angular.module('mean.clinicaluser').controller('ClinicaluserController', ['$scope', 'Global', 'Clinicaluser',
  function($scope, Global, Clinicaluser) {
    $scope.global = Global;
    $scope.package = {
      name: 'clinicaluser'
    };

    $scope.userDetails = [{key: 'DOB', value: '10/12/1986'}, {key: 'Age', value: '29'}, {key: 'City', value: 'Atlanta, GA'}, {key: 'Country', value: 'USA'}, {key: 'Travel?', value: 'Internationally'}];
  	$scope.userData = [{key: 'Weight', value: '42 Kg'}, {key: 'BMI', value: '15.41'}, {key: 'Blood Pressure', value: '111/81'}, {key: 'Resting Heart Rate', value: '77'}];
  	$scope.userConditions = ['Asthma', 'Near Sighted', 'Hypopharyngeal Cancer'];
  }
]);
