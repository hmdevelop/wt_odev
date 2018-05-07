mainApp.controller('GirisController', function($scope,$rootScope) {
    $scope.message = "Giris mesaji";
    
 
      

        $scope.giris =   function (){

            $scope.users = users;
           
                
            for(var i=0 ;i< users.length;i++){
           
                var t_user = $scope.kullaniciadi;
                var t_pass = $scope.sifre;
             
                if(t_user.localeCompare($scope.users[i].username) == 0 && t_pass.localeCompare($scope.users[i].pass) == 0){

                   
                    console.log("girildi");
                    $rootScope.login = true;
                    $rootScope.logedin = true;
                    $rootScope.logout = true;
                    $rootScope.userl = true;
                    $rootScope.myuser = t_user;
                   
                    if(t_user.localeCompare("admin") == 0 && t_pass.localeCompare("admin") == 0){
                        $rootScope.admin = true;
                    }



                }

            }
            if($rootScope.login == false){
                window.alert("Hatalı Kullanıcıadı veya Şifre");
            }


           

    
                window.location.href = '#/Haberler';
        }



        $scope.cikis =   function (){
 

           
            $rootScope.login =  false ;
            $rootScope.logedin = false;
            $rootScope.logout = false;
            $rootScope.admin = false;
            $rootScope.userl = false;
            console.log("çikildi");
    
                window.location.href = '#/Haberler';
        }




});