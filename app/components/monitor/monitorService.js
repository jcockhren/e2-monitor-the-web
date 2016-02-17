(function() {

  'use strict';

  function MonitorService ($http, $q) {
    this.responseTime = [];
    // this.sendTime = "";

    this.monitorServ = function(url){
      // this.sendTime = Date.now();
      var message = $http({
        method: 'get',
        url: url
      });

      return(message.then (handleSuccess, handleError));

  }


  function handleError( response ) {
    if (
      ! angular.isObject( response.data ) ||
      ! response.data.message
      ) {
      return( $q.reject( "An unknown error occurred." ) );
      }
    return( $q.reject( response.data.message ) );
  }
  function handleSuccess( response ) {
    // console.log(this.sendTime);
    return({
      response: response
    });
  }

  } //Monitor Service Closed

  angular
    .module('app')
    .service('MonitorService', MonitorService);


})();
