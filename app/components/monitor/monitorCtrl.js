(function () {

  'use strict';

  /**
   * I can have stuff here and no other scope can see it!
   * though you can't refer to any Angular stuff like $scope
   * but for Objects or Arrays you could get clever with
   */

  function MonitorCtrl ($http) {

    this.searchURL = "";

    this.monitor = function(){

      this.sendTime = Date.now();
      console.log('date clicked', this.sendTime);

      $http({
        method: 'GET',
        url: this.searchURL
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          var one = Date.now();
          console.log("current time ",one);
          console.log(this.monitor);

          console.log(response);
          console.log('bytes ',20+(response.data.length/2)*4);
          console.log(response.config.headers);
          console.log(one);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(response);
        });

    };


  }


  angular
    .module('app')
    .controller('MonitorCtrl', MonitorCtrl);

})();
