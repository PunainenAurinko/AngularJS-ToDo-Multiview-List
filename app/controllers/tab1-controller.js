'use strict';

var todoList = angular.module('todoList');

// DEFAULT VIEW TAB 1 CONTROLLER

todoList.controller('tab1Controller', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    $scope.name = 'to-do list 1';

    // TAB 1 LIST ITEMS

//    localStorage.clear();

    var fullListOne = localStorage.getItem('listOne');
    var realListOne = JSON.parse(fullListOne);

    if (fullListOne === null || fullListOne.length == 0) {

        var defaultList = function () {
            return [
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

        };
    } else {
        var defaultList = function () {
            return realListOne;
            console.log(realListOne)
        }
    }

    $scope.items = defaultList();
    console.log($scope.items);

    var stor = JSON.stringify($scope.items);
    console.log(stor);

    var list = localStorage.setItem('listOne', stor);

    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listOne', stor);

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS

    $scope.clearCompleted = function () {
        
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
        
        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listOne', stor);
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listOne', stor);
    }

}]);