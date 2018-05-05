mainApp.controller('GirisController', function($scope,$rootScope) {
    $scope.message = "Giris mesaji";
    $rootScope.name = 'AngularJS';
 
      

        $scope.giris =   function (){

            $scope.users = users;
           
                
            for(var i=0 ;i< users.length;i++){
           
                var t_user = $scope.kullaniciadi;
                var t_pass = $scope.sifre;
             
                if(t_user.localeCompare($scope.users[i].username) == 0 && t_pass.localeCompare($scope.users[i].pass) == 0){

                    console.log("girildi");
                    $rootScope.login = true;
                }

            }
            if($rootScope.login == false){
                window.alert("Hatalı Kullanıcıadı veya Şifre");
            }


           

    
                window.location.href = 'http://localhost:3000/#/Haberler';
        }



        $scope.cikis =   function (){
 

           
            $rootScope.login =  false ;
           
            console.log("çikildi");
    
                window.location.href = 'http://localhost:3000/#/Haberler';
        }




});