(function () {

  'use strict';

  /**
   * I can have stuff here and no other scope can see it!
   * though you can't refer to any Angular stuff like $scope
   * but for Objects or Arrays you could get clever with
   */

  function MonitorCtrl (MonitorService) {

    this.url = "";
    // this.sendTime = [];
    this.responseObj = {};
    this.size = "";
    // this.receiveTime = "";

    this.monitor = function(){
      MonitorService.monitorServ(this.url)
        .then (function(response){
          console.log(response);
          // return this.size = response.response.data.length
          console.log("bytes ", 20+(response.response.data.length/2)*4);
        },
          function(errorMessage){
            console.warn(errorMessage);
          });

    };
  }

  angular
    .module('app')
    .controller('MonitorCtrl', MonitorCtrl);

})();
