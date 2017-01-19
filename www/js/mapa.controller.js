angular.module('starter.controllers')
.controller('MapaCtrl', function($scope, Mapa, Marcadores, uiGmapIsReady) {

  var mapOptions = {
    center: {
      latitude: '-38.45',
      longitude: '-70.6666666667',
    },
    zoom: 4,
  }
  $scope.Mapa = Mapa
  $scope.Mapa.options = mapOptions
  $scope.Marcadores = Marcadores
  $scope.events = {
    click: function (googleMarker, eventName, clickedMarker) {
      googleMarker.setVisible(true)
      // var info = $scope.Mapa.api.InfoWindow({content:"Hola Mundo"})
      // info.open(googleMarker.getMap(), googleMarker)

      // console.log($scope.Mapa.api);
    }
  }
  // $scope.infowindow = function(googleMarker, eventName, clickedMarker) {
  //   uiGmapIsReady.promise().then(function(instances) {
  //     $scope.Mapa.api = Mapa.api
  //     // console.log($scope.Mapa.api)
  //   })
  // }

})

// $scope.$apply(function () {
//   var content = "This is Pirulandia my friend"
// var infoWindow = $scope.Mapa.api.InfoWindow({content:content})
// infoWindow.open($scope.Mapa, googleMarker)
// $scope.Marcadores.data = $scope.Marcadores.data.map(
//   function (el) {
//     if (el.id === googleMarker.key) {
//       el.markerOptions.title = "Pirulandia"
//     }
//     return el
//   })
//   console.log($scope.Marcadores.data);
// })
