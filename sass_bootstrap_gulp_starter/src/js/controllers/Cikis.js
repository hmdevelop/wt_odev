mainApp.controller('CikisController', function($scope,$rootScope) {
    $scope.message = "Cikis  mesaji";
   
 
      

        $scope.cikis =   function (){
 

           
            $rootScope.login =  false ;
            $rootScope.logedin =  false ;
            
            $rootScope.logout =  true ;
           
            console.log("çikildi");
    
                window.location.href = '#/Haberler';
        }



});