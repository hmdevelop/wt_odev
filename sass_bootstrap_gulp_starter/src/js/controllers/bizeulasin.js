mainApp.controller('BizeUlasinController', function($scope,$rootScope) {
    $scope.message = "BizeUlasin mesaji";

    $scope.gonderiEkle =   function (){

         console.log("gonderi");
         var t_post = {name: $scope.name , email: $scope.email,mesaj:$scope.mesaj};
         $scope.postt = gonderiler;
         $scope.postt.push(t_post);


         window.location.href = 'http://localhost:3000/#/';
           /* var t_new = {baslik: $scope.t_baslik , body: $scope.t_body};

            $scope.news = news;
           var t_news = $scope.news;
                   t_news.push(t_new);
               window.location.href = 'http://localhost:3000/#/Haberler';
        
*/
       
    }






});