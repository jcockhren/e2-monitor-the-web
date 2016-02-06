(function () {

  'use strict';

  angular
      .module("app")
      .config(config);

    function config ($routeProvider) {
      $routeProvider
      // .when('/', {
      //   templateUrl: 'app/components/auth/authView.html',
      //   controller: 'AuthCtrl as authCtrl'
      // })
      .otherwise({redirectTo: '/'});
    };


})();
