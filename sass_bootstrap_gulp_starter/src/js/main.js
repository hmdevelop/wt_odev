var mainApp = angular.module("mainApp", ['ngRoute']);


mainApp.config(['$routeProvider', function($routeProvider ) {
   $routeProvider.
   
   when('/Hakkinda', {
      templateUrl: 'Hakkinda.htm',
      controller: 'HakkindaController'
   }).

   when('/Hakkinda1', {
    templateUrl: 'Hakkinda1.htm',
    controller: 'Hakkinda1Controller'
 }).

 when('/Hakkinda2', {
    templateUrl: 'Hakkinda2.htm',
    controller: 'Hakkinda2Controller'
 }).

 when('/Hakkinda3', {
    templateUrl: 'Hakkinda3.htm',
    controller: 'Hakkinda3Controller'
 }).

 when('/Hakkinda4', {
    templateUrl: 'Hakkinda4.htm',
    controller: 'Hakkinda4Controller'
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

 when('/Cikis', {
  templateUrl: 'Cikis.htm',
  controller: 'CikisController'
}).

 when('/haberekle', {
    templateUrl: 'haberekle.htm',
    controller: 'HaberekleController'
 }).

 when('/HaberEdit', {
  templateUrl: 'HaberEdit.htm',
  controller: 'HaberEditController'
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
























