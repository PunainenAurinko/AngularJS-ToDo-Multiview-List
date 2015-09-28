'use strict';

var todoList = angular.module('todoList');

// DEFAULT VIEW TAB 1 CONTROLLER

todoList.controller('tab1Controller', ['$scope', function ($scope, $localStorage) {

    $scope.name = 'to-do list 1';

    // TAB 1 LIST ITEMS

    $scope.items = [
        {
            'title': 'Learn some stuff',
            'done': false
        },
        {
            'title': 'Code some stuff',
            'done': false
        },
        {
            'title': 'Code some more',
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