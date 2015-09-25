'use strict';

// Declare app level module which depends on views, and components
angular.module('todoList', [
    'ui.router',
    'ui.bootstrap'
]).config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/main');

        $stateProvider
            .state('main', {
                url: '/main',
                controller: 'todoListController',
                templateUrl: 'main.html'
            })

    });