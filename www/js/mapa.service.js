angular.module('starter.services')
.service('Mapa', function Mapa(uiGmapGoogleMapApi, uiGmapIsReady) {
  var servicio = this
  uiGmapGoogleMapApi.then(function(googleMaps) {
    servicio.api = googleMaps
    // console.log(servicio.api)
  })
})
