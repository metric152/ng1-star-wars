(function() {
    StarWarsApi = angular.module('StarWarsApi', ['ngRoute']);

    StarWarsApi.run(angular.noop).config(configure);
    StarWarsApi.$inject = ['$routeProvider'];

    configure.$inject = ['$routeProvider', '$locationProvider'];
    function configure($routeProvider, $locationProvider){

        $routeProvider.when('/category/:type',{
            'template': '<cards></cards>'
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

    // Manually bootstrap the app: https://stackoverflow.com/a/16539428/122236
    // angular.element(document).ready(function() {
    //     angular.bootstrap(document, ['StarWarsApi']);
    // });
})();
