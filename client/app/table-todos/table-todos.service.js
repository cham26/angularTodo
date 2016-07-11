(function() {
    'use strict';

    angular
        .module('chamAppApp.table-todos')
        .factory('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    /* @ngInject */
    function TodoService($http) {
        
        var vm = this;
        
        var Todo = {
            getAllList: getAllList
        };
        return Todo;

        ////////////////

        function getAllList() {
            return $http.get('http://jsonplaceholder.typicode.com/comments')
            .then(function(response){
               return response;
            })
            .catch(function(response){
                console.log(response);
            });
        }
        
    


    }
})();