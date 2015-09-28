'use strict';

var todoList = angular.module('todoList');

// TAB 3 CONTROLLER

todoList.controller('tab3Controller', ['$scope', function ($scope, $localStorage) {

    $scope.name = 'to-do list 3';

    // TAB 3 DEFAULT LIST ITEMS

    $scope.items = [
        {
            'title': 'Repeat some stuff',
            'done': false
                    },
        {
            'title': 'Recode some stuff',
            'done': false
                    },
        {
            'title': 'Repeat some more',
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