mainApp.controller('HaberlerController', function($scope,$rootScope) {
    $scope.message = "Haberler mesaji";
    $scope.news = news;


  //



$scope.habersil =   function ($index){

    $scope.selectedIndex = $index;


        console.log($scope.selectedIndex);
        $scope.news = news;
        var t_news = $scope.news;
        t_news.splice($scope.selectedIndex, 1);




       
           window.location.href = 'http://localhost:3000/#/Haberler';
    

   
}



//


$scope.haberduzenle =   function (){

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

///


   
});