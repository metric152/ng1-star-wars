(function(){
    StarWarsApi.component( 'species' , {
        'templateUrl': 'app/components/species/species.html',
        'controller': Species,
        'controllerAs': 'speciesCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Species.$inject = ['LookupsFactory'];

    function Species(LookupsFactory){

        LookupsFactory(this);

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            this.getPeople(this.resource.people);
            this.getFilms(this.resource.films);
            this.getPlanets([this.resource.homeworld]);
        }
    }
})();
