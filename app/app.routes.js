(function () {

  'use strict';

  angular
      .module("app")
      .config(config);

    function config ($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'app/components/monitor/monitorView.html',
        controller: 'MonitorCtrl as monitorCtrl'
      })
      .otherwise({redirectTo: '/'});
    }


})();
