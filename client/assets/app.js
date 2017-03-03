var myApp = angular.module('myApp', ['ngRoute','ngCookies']);
test = 0;
myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/index',{
        templateUrl: 'partials/homepage.html',

    })

    .when('/reg',{
      templateUrl: 'partials/reg.html',
      controller:'regController'
  })

  .when('/login',{
      templateUrl: 'partials/login.html',
      controller:'logController'
  })

  .when('/loggedin',{
      templateUrl: 'partials/loggedin.html',

  })

  .when('/newpoll',{
      templateUrl: 'partials/newpoll.html',

  })
  .when('/poll/:id',{

        templateUrl: 'partials/poll.html',

    })




  // .when('/addpost/:id',{
  //     templateUrl: 'partials/loggedin.html',
  //     controller:'postController'
  // })

  .otherwise({
          redirectTo: '/index'
        });



});
