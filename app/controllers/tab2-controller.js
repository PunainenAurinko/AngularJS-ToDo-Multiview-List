'use strict';

var todoList = angular.module('todoList');

// DEFAULT VIEW TAB 2 CONTROLLER

todoList.controller('tab2Controller', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    $scope.name = 'to-do list 2';

    // TAB 2 LIST ITEMS

//    localStorage.clear();

    var fullListTwo = localStorage.getItem('listTwo');
    var realListTwo = JSON.parse(fullListTwo);

    if (fullListTwo === null || fullListTwo.length == 0) {

        var defaultList = function () {
            return [
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

        };
    } else {
        var defaultList = function () {
            return realListTwo;
            console.log(realListTwo)
        }
    }

    $scope.items = defaultList();
    console.log($scope.items);

    var stor = JSON.stringify($scope.items);
    console.log(stor);

    var list = localStorage.setItem('listTwo', stor);

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listTwo', stor);

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS

    $scope.clearCompleted = function () {
        
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
        
        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listTwo', stor);
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listTwo', stor);
    }

}]);