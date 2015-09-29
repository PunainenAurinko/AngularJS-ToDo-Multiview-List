'use strict';

var todoList = angular.module('todoList');

// TAB 2 VIEW CONTROLLER

todoList.controller('tab2Controller', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.name = 'to-do list 2';

    // TAB 2 LIST ITEMS

    if (!$localStorage.listTwo || $localStorage.listTwo == 0) {
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
    } else {
        $scope.items = $localStorage.listTwo;
    }

    $localStorage.listTwo = $scope.items;

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        $localStorage.listTwo = $scope.items;

        $scope.newItem = '';
    }

    // CLEAR COMPLETED ITEMS

    $scope.clearCompleted = function () {

        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })

        $localStorage.listTwo = $scope.items;
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {

        $scope.items.splice(index, 1);

        $localStorage.listTwo = $scope.items;
    }

}]);