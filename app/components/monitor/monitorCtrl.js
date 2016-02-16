(function () {

  'use strict';

  /**
   * I can have stuff here and no other scope can see it!
   * though you can't refer to any Angular stuff like $scope
   * but for Objects or Arrays you could get clever with
   */

  function MonitorCtrl ($http, MonitorService) {

    this.url = "";

    this.monitor = function(url){
      MonitorService.monitorServ(url);
        // .then(function(nextresponse){
        //   var one = nextresponse;
        //   console.log(one);
        // })

    };
  }

  angular
    .module('app')
    .controller('MonitorCtrl', MonitorCtrl);

})();
