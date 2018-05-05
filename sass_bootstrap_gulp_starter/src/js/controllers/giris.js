mainApp.controller('GirisController', function($scope) {
    $scope.message = "Giris mesaji";

    $scope.login =   function (  ){

        window.alert($scope.kullaniciadi);
        var t_users =$rootscope.users; 
        for(var i=0 ; i<t_users.length ; i++){
            console.log(i);

        }


      /*   var t_new = {baslik: $scope.t_baslik , body: $scope.t_body};

         $scope.news = news;
        var t_news = $scope.news;
                t_news.push(t_new);
            window.location.href = 'http://localhost:3000/#/Haberler'; */ 
    }


});