(function() {
  'use strict';

  angular
    .module('chamAppApp.scheduleManager')
    .factory('scheduleManagerService', scheduleManagerService);

  scheduleManagerService.$inject = ['$http'];

  /* @ngInject */
  function scheduleManagerService($http) {

    var Sched = {
      getScheduleTable: getScheduleTable
    };
    return Sched;

    ////////////////

    function getScheduleTable() {
      return $http.get('/schedule')
        .then(function(response){
          return response;
        })
        .catch((err) => console.log(err));
    }




  }
})();
