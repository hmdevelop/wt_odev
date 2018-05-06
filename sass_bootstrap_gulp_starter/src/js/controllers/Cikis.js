mainApp.controller('CikisController', function($scope,$rootScope) {
    $scope.message = "Cikis  mesaji";
    $rootScope.name = 'AngularJS';
 
      

        $scope.cikis =   function (){
 

           
            $rootScope.login =  false ;
            $rootScope.logedin =  false ;
            
            $rootScope.logout =  true ;
           
            console.log("çikildi");
    
                window.location.href = 'http://localhost:3000/#/Haberler';
        }



});