(function () {

  'use strict';

  /**
   * I can have stuff here and no other scope can see it!
   * though you can't refer to any Angular stuff like $scope
   * but for Objects or Arrays you could get clever with
   */

  function MonitorCtrl () {
    this.doSometing = function () {
      // SomeFactory.doSomething();
    };
  }

  angular
    .module('app')
    .controller('MonitorCtrl', MonitorCtrl);

})();
