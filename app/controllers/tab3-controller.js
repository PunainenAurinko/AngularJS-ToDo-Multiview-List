'use strict';

var todoList = angular.module('todoList');

// TAB 3 VIEW CONTROLLER

todoList.controller('tab3Controller', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.name = 'to-do list 3';

    // TAB 3 LIST ITEMS

    if (!$localStorage.listThree || $localStorage.listThree == 0) {
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
    } else {
        $scope.items = $localStorage.listThree;
    }

    $localStorage.listThree = $scope.items;

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        $localStorage.listThree = $scope.items;

        $scope.newItem = '';
    }

    // CLEAR COMPLETED ITEMS

    $scope.clearCompleted = function () {

        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })

        $localStorage.listThree = $scope.items;
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {

        $scope.items.splice(index, 1);

        $localStorage.listThree = $scope.items;
    }

}]);