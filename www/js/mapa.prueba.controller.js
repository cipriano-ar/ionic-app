angular.module('starter.controllers')
.controller('MapaCtrl', function($scope, Mapa, Marcadores) {

$scope.Mapa = Mapa

      $scope.center = {
          latitude: 30,
          longitude: -90
      };
      $scope.zoom = 8;

      $scope.models = [];

      $scope.events = {
          click: function (map, eventName, handlerArgs) {
              $scope.$apply(function () {
                  $scope.models.push({
                      id: $scope.models.length,
                      latitude: handlerArgs[0].latLng.lat(),
                      longitude: handlerArgs[0].latLng.lng(),
                      options: {
                          animation: $scope.Mapa.api.Animation.DROP,
                          title: handlerArgs[0].latLng.toUrlValue()
                      }
                  });
              });
          }
      };


})
