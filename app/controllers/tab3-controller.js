'use strict';

var todoList = angular.module('todoList');

// DEFAULT VIEW TAB 3 CONTROLLER

todoList.controller('tab3Controller', ['$scope', 'localStorageService', function ($scope, localStorageService) {

    $scope.name = 'to-do list 3';

    // TAB 3 LIST ITEMS

//    localStorage.clear();

    var fullListThree = localStorage.getItem('listThree');
    var realListThree = JSON.parse(fullListThree);

    if (fullListThree === null || fullListThree.length == 0) {

        var defaultList = function () {
            return [
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

        };
    } else {
        var defaultList = function () {
            return realListThree;
            console.log(realListThree)
        }
    }

    $scope.items = defaultList();
    console.log($scope.items);

    var stor = JSON.stringify($scope.items);
    console.log(stor);

    var list = localStorage.setItem('listThree', stor);
   
    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listThree', stor);

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS

    $scope.clearCompleted = function () {
        
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
        
        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listThree', stor);
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);

        var stor = JSON.stringify($scope.items);
        var list = localStorage.setItem('listThree', stor);
    }

}]);