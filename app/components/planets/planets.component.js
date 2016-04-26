(function(){
    StarWarsApi.component( 'planets' , {
        'templateUrl': 'app/components/planets/planets.html',
        'controller': Planets,
        'controllerAs': 'planetsCtrl',
        'bindings': {
            'planets': '<'
        }
    });

    Planets.$inject = ['CardsSerivce'];

    function Planets(CardsSerivce){
        this.displayPlanet = function(planet){
            CardsSerivce.addItem(planet, 'planets');
        }
    }
})();
