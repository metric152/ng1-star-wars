(function(){
    StarWarsApi.component( 'films' , {
        'templateUrl': 'app/components/films/films.html',
        'controller': Films,
        'controllerAs': 'filmsCtrl',
        'bindings': {
            'films': '<'
        }
    });

    Films.$inject = ['CardsSerivce'];

    function Films(CardsSerivce){
        this.displayFilm = function(film){
            CardsSerivce.addItem(film, 'films');
        }
        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){

        }
    }
})();
