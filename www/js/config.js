angular.module('starter')
// ESTADOS
.config(function( $stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.resorts', {
      url: '/resorts',
      views: {
        'tab-resorts': {
          templateUrl: 'templates/tab-resorts.html',
          controller: 'ResortsCtrl',
        }
      }
    })
    .state('tab.detalle', {
      url: '/resorts/:id',
      views: {
        'tab-resorts': {
          templateUrl: 'templates/detalle.html',
          controller: 'DetalleCtrl',
        }
      }
    })
    .state('tab.mapa', {
      url: '/mapa',
      views: {
        'tab-mapa': {
          templateUrl: 'templates/tab-mapa.html',
          controller: 'MapaCtrl'
        }
      }
    })
  $urlRouterProvider.otherwise('/tab/resorts')
})
// GOOGLE MAPS
.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBlQK1M03oo-mKyMV-rgKQ4M87hl2HJR1Q',
    v: '3.25',
    china: true,
  })
})
// RUN
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
