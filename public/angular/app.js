'use strict';

angular.module('Libraries', [
    'ui.router',
    'ngRoute'
]);


let app = angular.module('main', [
    'Libraries'
]);

app.config(($stateProvider, $urlRouterProvider, $httpProvider) => {
    $urlRouterProvider.when('', '/indx').when('/', '/indx');
    $stateProvider
        .state('root', {
            url: '/indx',
            controller: 'MainController',
            templateUrl: './angular/templates/main.html'
        })
        .state('empty', {
            url: '/',
        })
});

app.run(function ($rootScope) {
});