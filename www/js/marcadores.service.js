angular.module('starter.services')
.service('Marcadores', function Marcadores($http) {

  this.data = []
  var servicio = this

  $http.get('data/resorts.json').then(function(response) {
    var marcador
    for (var i = 0; i < response.data.length; i++) {
      marcador = {
        id: Number(response.data[i].id),
        coords: {
          latitude: Number(response.data[i].coordenadas.latitude),
          longitude: Number(response.data[i].coordenadas.longitude),
        },
        markerOptions: {
          title: response.data[i].nombre
        }
      }
      servicio.data.push(marcador)
    }
    // console.log(servicio.data);
  })

})
