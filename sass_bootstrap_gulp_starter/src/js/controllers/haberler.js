mainApp.controller('HaberlerController', function($scope,$rootScope) {
    $scope.message = "Haberler mesaji";
    $scope.news = news;

    $scope.cikis =   function (){
 

           
        $rootScope.login =  false ;
       
        console.log("çikildi");

            window.location.href = 'http://localhost:3000/#/Haberler';
    }

   
});