'use strict';

// Declare app level module which depends on views, and components

var todoList = angular.module('todoList', [
    'ui.router',
    'ui.bootstrap',
    'ngStorage',
]);

todoList.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/tab1');

    // TAB 1 - MAIN STATE ========================================

    $stateProvider
        .state('tab1', {
            url: '/tab1',
            controller: 'tab1Controller',
            templateUrl: '../app/views/partial-tab1.html'
        })

    // TAB 2 STATE ========================================

    $stateProvider
        .state('tab2', {
            url: '/tab2',
            controller: 'tab2Controller',
            templateUrl: '../app/views/partial-tab2.html'
        })

    // TAB 3 STATE ========================================

    $stateProvider
        .state('tab3', {
            url: '/tab3',
            controller: 'tab3Controller',
            templateUrl: '../app/views/partial-tab3.html'
        })
});