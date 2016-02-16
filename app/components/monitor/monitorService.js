(function() {

  'use strict';

  function MonitorService ($http, $q) {
    this.sendTime = Date.now();
    this.responseTime = [];
    this.response2 = "";
    this.obj = {};

    this.monitorServ = function(url){
      var message = $http({
        method: 'GET',
        url: url
      });

      return(message.then (handleSuccess, handleError));


  }


      function handleError( response ) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {
            return( $q.reject( "An unknown error occurred." ) );
        }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );
    }
    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {
        return( response );
    }
  }

  angular
    .module('app')
    .service('MonitorService', MonitorService);


})();
