(function(){
    StarWarsApi.component( 'planet' , {
        'templateUrl': 'app/components/planet/planet.html',
        'controller': Planet,
        'controllerAs': 'planetCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Planet.$inject = ['CardsSerivce', 'LookupsFactory'];

    function Planet(CardsSerivce, LookupsFactory){
        LookupsFactory(this);

        this.$onInit = function(){
            this.getPeople(this.resource.residents);
            this.getFilms(this.resource.films);
        }
    }
})();
