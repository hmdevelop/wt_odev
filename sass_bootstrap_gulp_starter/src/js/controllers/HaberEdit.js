mainApp.controller('HaberEditController', function($scope , $rootScope) {
    $scope.message = "HaberEdit mesaji";


 $scope.news = news;

if($rootScope.selectForEditIndex==undefined){
    $rootScope.selectForEditIndex = 0;
}

 var t_new = news[$rootScope.selectForEditIndex];
 
    console.log(t_new['baslik']);

 $scope.eBaslik = t_new['baslik'];
 $scope.eBody = t_new['body'];






    $scope.habersave =   function (){

        if( $rootScope.login == false){
            window.alert("Lütfen Giriş Yapın");
        }else{
            var t_new = {baslik: $scope.eBaslik , body: $scope.eBody};

            $scope.news = news;
           var t_news = $scope.news;
                   t_news.push(t_new);
                   t_news.splice($scope.selectForEditIndex, 1);
               window.location.href = 'http://localhost:3000/#/Haberler';
        }
         
      

       
    }

});