angular.module('starter.controllers', [])

// ResortsCtrl
.controller('ResortsCtrl', function($scope, Resorts) {
  $scope.Resorts = Resorts
  $scope.remove = function(resort) {
    Resorts.remove(resort);
  }
})

// DetalleCtrl
.controller('DetalleCtrl', function($scope, $state, Resorts) {
  $scope.resort = Resorts.get($state.params.id)
})

// AccountCtrl
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
