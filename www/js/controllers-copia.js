angular.module('starter.controllers', [])

// ResortsCtrl
.controller('ResortsCtrl', function($scope, Resorts) {
  $scope.Resorts = Resorts
  $scope.remove = function(resort) {
    Resorts.remove(resort);
  }
})

// DetalleCtrl
.controller('DetalleCtrl', function($scope, $state, Resorts, uiGmapGoogleMapApi) {
  $scope.resort = Resorts.get($state.params.id)
  
  $scope.mapa = {
    center: {
      latitude: -35,
      longitude: -73
    },
    zoom: 8
  }
  uiGmapGoogleMapApi.then(function(maps) {
    console.log("1");
    }, function(error) {
      console.log(error);
    });
})

// AccountCtrl
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
