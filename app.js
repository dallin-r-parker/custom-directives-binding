const app = angular.module('app', []);

app.controller('controller', ($scope) => {
    $scope.name = 'dallin';
    $scope.names = [
        {name: 'mikayda'},
        {name: 'Ben'},
        {name: 'Trevor'}
        ]

    $scope.listNames = (names) => {
        names.map(e => {
            alert(e.name);
        })
    }
})

app.directive('searchResults', () => {
    return {
        template:
            '<input type="text" ng-model="person"/><button ng-click="alertNames({names: persons})">alert {{person}}</button><h1 ng-repeat="name in persons">{{name.name}}</h1>',
        scope: {
            person: '@',
            persons: '=',
            alertNames: '&'
        }
    }
})
