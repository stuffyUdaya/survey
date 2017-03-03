myApp.factory('userFactory',['$http',function($http){
  console.log("created user u ")
  var users = [];
  var factory ={};
  var topics = [];
  var topic = {};
  var posts =[];
  var user = {};
  var poll ={};
  var polls = [];

  factory.saveUser = function(saveUser,callback){
    console.log(callback)
    console.log(saveUser);
    users.push(saveUser);
    console.log(saveUser);
    $http.post('/new', saveUser).then(function(response){
      console.log(saveUser);
      console.log('response is ', response.data);
      var message = response.data;
      console.log('user record created');
      console.log(message);
      callback(message);

    })
  }

  factory.checkUser = function(logindata, callback){
    console.log("login info",logindata);
    $http.post('/check',logindata).then(function(response){
      console.log(logindata);
      console.log("response is", response.data);
        var msg = response.data;
        console.log('login ctrl passed');
        callback(msg);

    }
  )
  }

  factory.addPoll = function(poll,callback){
    console.log("poll from the factory", poll);
    $http.post('/addpoll',poll).then(function(response){
      console.log("response from the userfactory addpoll", response);
      callback(response);
    })
  }

  factory.deletePoll = function(poll,callback){
    console.log("poll to be deleted",poll);
    $http.delete('/deletepoll/'+poll).then(function(response){
      // for(var k =0; k < polls.length;k++){
      //   if(polls[k]._id == poll){
      //     polls.splice(i,1);
      //
      //   }
      // }
      console.log("response from delete poll factory",response);
      callback(response);
    })
  }

  factory.showPolls = function(callback){
    $http.get('/showpolls').then(function(response){
      polls = response.data.polls;
      console.log("response from showpolls factory", polls);
      callback(polls);
    })
  }

  factory.showonePoll = function(id,callback){
      console.log("id from the showpoll factory", id);
      $http.get('/polls/'+id).then(function(response){
        poll = response.data.poll
        console.log("response from showone1111111poll factory",poll);
        callback(poll);
      })
  }

factory.addVote = function(user,option,polluser,callback){
  console.log("from the factory", user,option, polluser);
  $http.post('/addvote/'+option).then(function(response){

    for(var j =0; j<poll.options.length; j++){
      if(poll.options[j]._id == response.data.vote._id){
        console.log(poll.options[j]);
        poll.options[j].vote = response.data.vote.vote

      }
    }
    console.log("response from user factory vote", response);
    callback(response);
  })
}



return factory;
}]);
