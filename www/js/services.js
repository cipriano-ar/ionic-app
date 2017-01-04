angular.module('starter.services', [])

.service('Resorts', function Resorts() {
  this.data = []
  // Might use a resource here that returns a JSON array
  $http.get('www/data/resorts.json').then(function(response) {
    this.data = response.data
    // console.log($scope.datos);
  })

  this.get = function get(id) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === parseInt(id)) {
        return this.data[i];
      }
    }
    return null
  }

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
    }
  };
});
