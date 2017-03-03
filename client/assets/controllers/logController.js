myApp.controller('logController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

console.log($cookies);

var cookieJar = $cookies.getAll();
$scope.cookies = cookieJar

console.log("cookies",cookieJar);
$scope.user = {};

$scope.Usercheck = function(){
  userFactory.checkUser($scope.user,function(data){

    console.log($scope.user);


    console.log("data from controller",data)

    if(data.logged_in){
      $cookies.put('id',data.user._id);
      $cookies.put('name',data.user.name.first);
      $location.url('/loggedin');
    }
    else{
      $scope.loginerror = data.err;
    }

  })
}
$scope.logout = function(){
  console.log('log me out');
  $cookies.remove('id');
  $cookies.remove('name');
  $location.url('/');
}


}]);
