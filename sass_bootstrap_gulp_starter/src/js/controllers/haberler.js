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




       
           window.location.href = '#/Haberler';
    

   
}



//


$scope.haberduzenle =   function ($index){

  
   


$rootScope.selectForEditIndex  = $index;


           window.location.href = '#/HaberEdit';
   

   
}

///


   
});