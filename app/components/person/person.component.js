(function(){
    StarWarsApi.component( 'person' , {
        'templateUrl': 'app/components/person/person.html',
        'controller': Person,
        'controllerAs': 'personCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Person.$inject = ['CardsService', 'LookupsFactory'];

    function Person(CardsService, LookupsFactory){
        LookupsFactory(this);

        this.$onInit = function($scope){
            this.getFilms(this.resource.films);
            this.getVehicles(this.resource.vehicles);
            this.getStarships(this.resource.starships);
            this.getPlanets([this.resource.homeworld]);
        }
    }
})();
