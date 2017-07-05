(function() {
    StarWarsApi = angular.module('StarWarsApi', []);

    StarWarsApi.run(angular.noop);
    StarWarsApi.$inject = [];

    // Manually bootstrap the app: https://stackoverflow.com/a/16539428/122236
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['StarWarsApi']);
    });
})();
