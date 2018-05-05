mainApp.controller('HaberekleController', function($scope) {
    $scope.message = "Haberekle mesaji";
    $scope.haberekle =   function (){

        var t_new = {baslik: $scope.t_baslik , body: $scope.t_body};

         $scope.news = news;
        var t_news = $scope.news;
                t_news.push(t_new);
            window.location.href = 'http://localhost:3000/#/Haberler';
    }

});