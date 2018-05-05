mainApp.controller('HaberekleController', function($scope , $rootScope) {
    $scope.message = "Haberekle mesaji";
    $scope.haberekle =   function (){

        if( $rootScope.login == false){
            window.alert("Lütfen Giriş Yapın");
        }else{
            var t_new = {baslik: $scope.t_baslik , body: $scope.t_body};

            $scope.news = news;
           var t_news = $scope.news;
                   t_news.push(t_new);
               window.location.href = 'http://localhost:3000/#/Haberler';
        }

       
    }

});