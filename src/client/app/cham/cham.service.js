(function() {
    'use strict';

    angular
        .module('app.chamApp')
        .factory('todoService', todoService);

    todoService.$inject = ['$http'];

    /* @ngInject */
    function todoService($http) {
        
        var vm = this;
        
        var service = {
            getAllList: getAllList
        };
        return service;

        ////////////////

        function getAllList() {
            return $http.get('http://jsonplaceholder.typicode.com/comments')
            .then(function(response){
               return response;
            })
            .catch(function(response){
                console.log(response)
            }) 
        }
        
    


    }
})();