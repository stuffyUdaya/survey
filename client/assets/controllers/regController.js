myApp.controller('regController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){
  var cookieJar = $cookies.getAll();
  $scope.cookies = cookieJar
  $scope.newUser={};
  $scope.Confpassword={};
$scope.saveUser = function(){
        if ($scope.newUser.password == $scope.newUser.Confpassword){
        console.log('password', $scope.newUser.password,"confpass",$scope.newUser.Confpassword)
        userFactory.saveUser($scope.newUser,function(data){
          console.log($scope.newUser);
          console.log("reg",data);
          $scope.data = data;
          if(data.created){
            console.log("inside datacreated")
            $cookies.put('id',data.user._id);
            $cookies.put('name',data.user.name.first);
            $location.url('/loggedin');
          }
          console.log("data from controller",$scope.data);
          if($scope.data.errmsg){
            $scope.errusername = $scope.data.errmsg
            $location.url('/reg');
          }
          // console.log($scope.data.errors.email.message);
          // $location.url('/reg');
        });

      }
    else{
      console.log('hi wrong')
      $scope.message = "Passwords don't  match";
      $location.url('/reg')
    }

}


$scope.logout = function(){
  console.log('log me out');
  $cookies.remove('id');
  $cookies.remove('name');
  $location.url('/');
}




}]);
