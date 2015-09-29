'use strict';

var todoList = angular.module('todoList');

// TAB VIEW 1 CONTROLLER

todoList.controller('tab1Controller', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.name = 'to-do list 1';

    // TAB 1 LIST ITEMS

    //    localStorage.clear();

    if (!$localStorage.listOne || $localStorage.listOne == 0) {
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
    } else {
        $scope.items = $localStorage.listOne;
    }

    $localStorage.listOne = $scope.items;

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        $localStorage.listOne = $scope.items;

        $scope.newItem = '';
    }

    // CLEAR COMPLETED ITEMS

    $scope.clearCompleted = function () {

        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })

        $localStorage.listOne = $scope.items;
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        
        $scope.items.splice(index, 1);

        $localStorage.listOne = $scope.items;
    }

}]);