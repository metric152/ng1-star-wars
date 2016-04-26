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
                CardsSerivce.addItem(result[0], 'planets');
            });
        }

        // List the films
        this.getFilms = function(){
            CardsSerivce.getResources(this.resource.films).then( function(results){
                this.films = results;
            }.bind(this));
        }

        this.$onInit = function($scope){
            this.getFilms();
        }
    }
})();
