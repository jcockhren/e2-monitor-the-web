app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      // .when('/', {
      //   templateUrl: 'app/components/auth/authView.html',
      //   controller: 'AuthCtrl as authCtrl'
      // })
      .otherwise({redirectTo: '/'});
  }]);
