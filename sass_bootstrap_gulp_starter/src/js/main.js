var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/Hakkinda', {
      templateUrl: 'Hakkinda.htm',
      controller: 'HakkindaController'
   }).
   
   when('/Haberler', {
      templateUrl: 'haberler.htm',
      controller: 'HaberlerController'
   }).
   
   when('/Tarih', {
    templateUrl: 'Tarih.htm',
    controller: 'TarihController'
 }).

 when('/Bizeulasin', {
    templateUrl: 'Bizeulasin.htm',
    controller: 'BizeulasinController'
 }).

 when('/Giris', {
    templateUrl: 'Giris.htm',
    controller: 'GirisController'
 }).

 when('/Haberekle', {
    templateUrl: 'Haberekle.htm',
    controller: 'HaberekleController'
 }).

   otherwise({
      redirectTo: '/'
   });
}]);

mainApp.controller('HakkindaController', function($scope) {
   $scope.message = "Hakkinda mesaji";
});

mainApp.controller('HaberlerController', function($scope) {
    $scope.message = "Haberler mesaji";
});

mainApp.controller('TarihController', function($scope) {
    $scope.message = "Tarih mesaji";
});

mainApp.controller('BizeulasinController', function($scope) {
    $scope.message = "Bizeulasin mesaji";
});

mainApp.controller('GirisController', function($scope) {
    $scope.message = "Giris mesaji";
});

mainApp.controller('HaberekleController', function($scope) {
    $scope.message = "Haberekle mesaji";
});