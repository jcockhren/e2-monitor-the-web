(function() {

  'use strict';

  function MonitorService ($http) {
    this.sendTime = Date.now();
    this.responseTime = [];
    this.response2 = "";

    this.monitorServ = function(url){

      $http({
        method: 'GET',
        url: url
      }).then(function successCallback(response) {
          // this.responseTime.push(Date.now());
          setInterval(2000);
          console.log(response);
          // this.response2 = response;

          console.log('bytes ',20+(response.data.length/2)*4);
        }, function errorCallback(error) {
          console.log(error);
        });
        // return this.response2;

      };
  }


  angular
    .module('app')
    .service('MonitorService', MonitorService);


})();
