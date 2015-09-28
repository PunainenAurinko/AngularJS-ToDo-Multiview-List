'use strict';

var todoList = angular.module('todoList');

// TAB 2 CONTROLLER

todoList.controller('tab2Controller', ['$scope', function ($scope, $localStorage) {

    $scope.name = 'to-do list 2';

    // TAB 2 DEFAULT LIST ITEMS

    $scope.items = [
        {
            'title': 'Forget some stuff',
            'done': false
                    },
        {
            'title': 'Undo some stuff',
            'done': false
                    },
        {
            'title': 'Forget some more',
            'done': false
                    }
            ];

    // LOCAL STORAGE

    $scope.$storage = $localStorage;

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS

    $scope.clearCompleted = function () {
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    }

}]);