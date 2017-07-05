(function(){
    StarWarsApi.component( 'film' , {
        'templateUrl': 'app/components/film/film.html',
        'controller': Film,
        'controllerAs': 'filmCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Film.$inject = ['LookupsFactory'];

    function Film(LookupsFactory){
        LookupsFactory(this);

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            this.getPeople(this.resource.characters);
            this.getPlanets(this.resource.planets);
            this.getStarships(this.resource.starships);
        }
    }
})();
