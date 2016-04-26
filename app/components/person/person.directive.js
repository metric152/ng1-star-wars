(function(){
    StarWarsApi.directive( 'person' , Person);

    Person.$inject = ['swapiService', 'CardsSerivce'];

    function Person(swapiService, CardsSerivce){
        function viewHomeWorld(){
            CardsSerivce.getResource(this.resource.homeworld).then(function(result){
                console.log( result );
                CardsSerivce.addItem(result, 'planets');
            });
        }

        // List the films
        function getFilms(){
            console.log( this.resource.films );
        }

        function controller($scope){
            angular.extend(this, {
                'films': [],

                'viewHomeWorld': viewHomeWorld,
                'getFilms': getFilms
            });

            this.getFilms();
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/person/person.html',
            'scope':{
                'resource': '='
            },
            'controller': ['$scope', controller],
            'controllerAs': 'personCtrl',
            'bindToController': true
        };
    }
})();
