(function(){
    StarWarsApi.component( 'person' , {
        'templateUrl': 'app/components/person/person.html',
        'controller': Person,
        'controllerAs': 'personCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Person.$inject = ['CardsSerivce'];

    function Person(CardsSerivce){
        this.films = [];

        this.viewHomeWorld = function(){
            CardsSerivce.getResources([this.resource.homeworld]).then(function(result){
                console.log( result );
                CardsSerivce.addItem(result, 'planets');
            });
        }

        // List the films
        this.getFilms = function(){
            console.log( this.resource.films );
        }

        this.$onInit = function($scope){
            this.getFilms();
        }
    }
})();
