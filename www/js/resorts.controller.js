angular.module('starter.controllers')
.controller('ResortsCtrl', function($scope, Resorts, Mapa) {
  $scope.Resorts = Resorts
  $scope.Mapa = Mapa
  $scope.remove = function(resort) {
    Resorts.remove(resort)
  }
})
