(function() {
    'use strict';

    angular
        .module('chamApp')
        .factory('todoService', todoService);

    todoService.$inject = [];

    /* @ngInject */
    function todoService() {
    	var vm = this;
		vm.thingsTodo = '';
        var service = {
            getAllList: getAllList
        };
        return service;

        ////////////////

        function getAllList() {
        	return [vm.thingsTodo];
        	console.log('hello');
        }
    }
})();