angular.module('starter.controllers')
.controller('DetalleCtrl', function($scope, $state, Resorts, Mapa) {
  $scope.resort = Resorts.get($state.params.id)
  $scope.Mapa = Mapa
  $scope.Mapa = {
    center: {
      latitude: $scope.resort.coordenadas.latitud,
      longitude: $scope.resort.coordenadas.longitud,
    },
    zoom: 16,
  }
  $scope.marcador = {
    id: $scope.resort.id,
    coords: {
      latitude: $scope.resort.coordenadas.latitud,
      longitude: $scope.resort.coordenadas.longitud,
    }
  }
})
