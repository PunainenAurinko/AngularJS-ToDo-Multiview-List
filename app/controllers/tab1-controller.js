'use strict';

var todoList = angular.module('todoList');

// DEFAULT VIEW TAB 1 CONTROLLER

todoList.controller('tab1Controller', ['$scope', '$localStorage', function ($scope, $localStorage) {

    $scope.name = 'to-do list 1';

    // TAB 1 LIST ITEMS

//    localStorage.clear();

//    var fullListOne = localStorage.getItem('listOne');
//    var realListOne = JSON.parse(fullListOne);
    
    
//    var listOne = $localStorage.listOne;

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
    
   
    
//    if (fullListOne === null || realListOne.length == 0) {
//
//        var defaultList = function () {
//            return [
//                {
//                    'title': 'Learn some stuff',
//                    'done': false
//        },
//                {
//                    'title': 'Code some stuff',
//                    'done': false
//        },
//                {
//                    'title': 'Code some more',
//                    'done': false
//        }
//            ];
//
//        };
//    } else {
//        var defaultList = function () {
//            return realListOne;
//            console.log(realListOne)
//        }
//    }
//
//    $scope.items = defaultList();
//    console.log($scope.items);
//
//    var stor = JSON.stringify($scope.items);
//    console.log(stor);

//    var list = localStorage.setItem('listOne', stor);
    
    $localStorage.listOne = $scope.items;
    
    // ADD ITEMS TO THE LIST

    $scope.addItem = function () {

        $scope.items.push({
            'title': $scope.newItem,
            'done': false
        });

//        var stor = JSON.stringify($scope.items);
//        var list = localStorage.setItem('listOne', stor);
        
        $localStorage.listOne = $scope.items;

        $scope.newItem = '';
    }

    // CLEAR COMPLETD ITEMS

    $scope.clearCompleted = function () {
        
        $scope.items = $scope.items.filter(function (listItem) {
            return !listItem.done;
        })
        
//        var stor = JSON.stringify($scope.items);
//        var list = localStorage.setItem('listOne', stor);
        
        $localStorage.listOne = $scope.items;
    }

    // DELETE AN ITEM FROM THE LIST

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);

//        var stor = JSON.stringify($scope.items);
//        var list = localStorage.setItem('listOne', stor);
        
        $localStorage.listOne = $scope.items;
    }

}]);