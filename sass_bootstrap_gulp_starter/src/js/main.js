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

 when('/BizeUlasin', {
    templateUrl: 'BizeUlasin.htm',
    controller: 'BizeUlasinController'
 }).

 when('/Giris', {
    templateUrl: 'Giris.htm',
    controller: 'GirisController'
 }).

 when('/Haberekle', {
    templateUrl: 'Haberekle.htm',
    controller: 'HaberekleController'
 }).

 when('/Anasayfa', {
    templateUrl: 'Anasayfa.htm',
    controller: 'AnasayfaController'
 }).

 when('/home1', {
    templateUrl: 'home1.htm',
    controller: 'home1Controller'
 }).

 when('/home2', {
    templateUrl: 'home2.htm',
    controller: 'home2Controller'
 }).

 when('/home3', {
    templateUrl: 'home3.htm',
    controller: 'home3Controller'
 }).

   otherwise({
      redirectTo: '/Anasayfa'
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

mainApp.controller('BizeUlasinController', function($scope) {
    $scope.message = "BizeUlasin mesaji";
});

mainApp.controller('GirisController', function($scope) {
    $scope.message = "Giris mesaji";
});

mainApp.controller('HaberekleController', function($scope) {
    $scope.message = "Haberekle mesaji";
});

mainApp.controller('AnasayfaController', function($scope) {
    $scope.message = "Anasayfa mesaji";
});

mainApp.controller('home1Controller', function($scope) {
    $scope.message = "home1 mesaji";
});

mainApp.controller('home2Controller', function($scope) {
    $scope.message = "home2 mesaji";
});

mainApp.controller('home3Controller', function($scope) {
    $scope.message = "home3 mesaji";
});