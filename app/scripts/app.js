'use strict';

// Declare app level module which depends on views, and components

var todoList = angular.module('todoList', [
    'ui.router',
    'ui.bootstrap'
]);

todoList.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tab1');

    // TAB 1 - MAIN STATE ========================================

    $stateProvider
        .state('tab1', {
            url: '/tab1',
            controller: 'todoListController',
            templateUrl: '../app/views/partial-tab1.html'
        })

    // TAB 2 STATE ========================================

    $stateProvider
        .state('tab2', {
            url: '/tab2',
            controller: 'todoListController',
            templateUrl: '../app/views/partial-tab2.html',
            controller: 'tab2Controller'
        })

    // TAB 3 STATE ========================================

    $stateProvider
        .state('tab3', {
            url: '/tab3',
            controller: 'todoListController',
            templateUrl: '../app/views/partial-tab3.html',
            controller: 'tab3Controller'
        })
});

// TAB 2 CUSTOM CONTROLLER ========================================

todoList.controller('tab2Controller', function ($scope) {
    $scope.name = 'to-do list 2';
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

});

// TAB 3 CUSTOM CONTROLLER ========================================

todoList.controller('tab3Controller', function ($scope) {
    $scope.name = 'to-do list 3';
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

});