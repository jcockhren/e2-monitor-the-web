(function () {

  'use strict';

  /**
   * I can have stuff here and no other scope can see it!
   * though you can't refer to any Angular stuff like $scope
   * but for Objects or Arrays you could get clever with
   */

  function MonitorCtrl ($http) {
    this.doSometing = function () {

    this.searchURL = ""


      // $http.get(url).then(function(response){

      // }), fuction(err){
      //   console.log(err.message);
      // })




    };
  }

  angular
    .module('app')
    .controller('MonitorCtrl', MonitorCtrl);

})();
