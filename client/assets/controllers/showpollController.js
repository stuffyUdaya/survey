myApp.controller('showpollController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

  userFactory.showonePoll($routeParams.id, function(poll){
    console.log("routeparams",$routeParams.id)
  $scope.poll = poll;
    console.log("data from showpoll controller",$scope.poll)
  })

  $scope.vote = function(user,option,polluser){
    console.log("user",user);
    console.log("option",option);
    console.log("polluser",polluser);
      userFactory.addVote(user,option,polluser, function(vote){
        console.log("vote from vote controller", vote);
      })
  }

}])
