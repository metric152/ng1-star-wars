(function(){
    StarWarsApi.component( 'starship' , {
        'templateUrl': 'app/components/starship/starship.html',
        'controller': Starship,
        'controllerAs': 'starshipCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Starship.$inject = ['LookupsFactory'];

    function Starship(LookupsFactory){
        LookupsFactory(this);

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            this.getFilms(this.resource.films);
            this.getPeople(this.resource.pilots);
        }
    }
})();
