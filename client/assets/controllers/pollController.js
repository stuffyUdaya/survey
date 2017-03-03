myApp.controller('pollController',['$scope','userFactory','$http','$location','$routeParams','$cookies',function($scope,userFactory,$http,$location,$routeParams,$cookies){

$scope.savePoll = function(user){
  console.log(user);
  $scope.newpoll.user = user;

  if($scope.newpoll.question.length<8){
    $scope.quesmsg = "Question has to be more than eight characters"
  }
  else if($scope.newpoll.option1.length<3){
    $scope.optmsg = "options has to be atleast three characters"
  }
  else if($scope.newpoll.option2.length<3){
    $scope.optmsg = "options has to be atleast three characters"
  }
  else if($scope.newpoll.option3.length<3){
    $scope.optmsg = "options has to be atleast three characters"
  }
  else if($scope.newpoll.option4.length<3){
    $scope.optmsg = "options has to be atleast three characters"
  }
else{
  userFactory.addPoll($scope.newpoll,function(data){
    console.log("data from pollcontroller", data);
    if(!data.data.err){
    $location.url('/loggedin')
    $scope.newpoll = {};
  }
  else if(data.data.msg){

    $scope.optmsg = data.data.msg
  }
  else{
    $scope.quesmsg = data.data.err.errors.question.message;
  }
  })
}
}

userFactory.showPolls(function(polls){
  console.log("from polls controller getting all topics", polls);
  $scope.polls = polls


})

$scope.deletePoll = function(poll){
  console.log("id of the poll", poll);
  userFactory.deletePoll(poll,function(data){
    userFactory.showPolls(function(polls){
      console.log("from polls controller getting all topics", polls);
      $scope.polls = polls


    })

  })
}



}]);
