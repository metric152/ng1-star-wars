(function(){
    StarWarsApi.component( 'planet' , {
        'templateUrl': 'app/components/planet/planet.html',
        'controller': Planet,
        'controllerAs': 'planetCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Planet.$inject = ['CardsService', 'LookupsFactory'];

    function Planet(CardsService, LookupsFactory){
        LookupsFactory(this);

        this.$onInit = function(){
            this.getPeople(this.resource.residents);
            this.getFilms(this.resource.films);
        }
    }
})();
