(function () {
  'use strict';

  angular
    .module('chamAppApp.table-todos')
    .controller('TableTodosController', TableTodosController);

  TableTodosController.$inject = ['TodoService', 'ModalService'];

  /* @ngInject */
  function TableTodosController (TodoService, ModalService) {
    var vm = this;
    vm.title = 'TableTodosController';
    vm.thingsTodo = '';
    vm.checkList = [];
    vm.addNewTodo = function () {
      vm.checkList.push(vm.thingsTodo);
    };
    function showMessage() {
      alert("You have successfully deleted the item")
    }
    vm.deleteTodo = function (activity) {
      let template = '/components/chamModal/views/table-todoModal.html';
      ModalService.open(activity, template, 'lg', function (result) {
        vm.checkList.splice(result, 1);
      })
        .then(() => showMessage());
    };

    vm.dataEntered = TodoService.getAllList()
      .then(function (response) {
        vm.dataEntered = response.data;

      });

    vm.hover = function () {
      console.log('This bird can indeed fly!');
    };

    vm.bacteria = function ($scope) {
      $scope.nameOfBacteria = [];

      vm.saySalmonella = function () {
        $scope.nameOfBacteria.push('I cause Food poisoning!');
      };

      vm.sayPseudomonas = function () {
        $scope.nameOfBacteria.push('I can cause Septic shock!');
      };

      vm.sayInfluenza = function () {
        $scope.nameOfBacteria.push('Im responsible for your flu!');
      };
    };


    activate();

    ////////////////

    function activate() {
    }

  }
})();
