angular.module('starter.services')
.service('Resorts', function Resorts($http) {

  this.data = []
  var servicio = this

  $http.get('data/resorts.json').then(function(response) {
    servicio.data = response.data
  })

  // all
  this.all = function all() {
    return this.data
  }
  // get
  this.get = function get(id) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        return this.data[i]
      }
    }
    return null
  }
  // remove
  this.remove = function remove(resort) {
    this.data.splice(this.data.indexOf(resort), 1)
  }

})
