(function() {
    StarWarsApi = angular.module('StarWarsApi', ['ui.router']);

    StarWarsApi.run(angular.noop).config(configure);
    StarWarsApi.$inject = ['$stateProvider'];

    configure.$inject = ['$stateProvider', '$locationProvider'];
    function configure($stateProvider, $locationProvider){

        $stateProvider.state({
            'name': 'category',
            'url': '/category/{type}',
            'component': 'cards',
            'resolve': {
                'results': ['CardsService', '$transition$', function(CardsService, $transition$){
                    return CardsService.getResources([CardsService.buildUrl($transition$.params().type)]);
                }],
                'type': ['$transition$', function($transition$){
                    return $transition$.params().type;
                }]
            }
        });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

    // Manually bootstrap the app: https://stackoverflow.com/a/16539428/122236
    // angular.element(document).ready(function() {
    //     angular.bootstrap(document, ['StarWarsApi']);
    // });
})();
