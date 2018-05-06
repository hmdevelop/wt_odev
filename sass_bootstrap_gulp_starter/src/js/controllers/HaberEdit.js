mainApp.controller('HaberEditController', function($scope , $rootScope) {
    $scope.message = "HaberEdit mesaji";


 $scope.news = news;
 var t_new = news[$rootScope.selectForEditIndex];



 $scope.eBaslik = t_new['baslik'];
 $scope.eBody = t_new['body'];


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