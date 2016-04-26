(function(){
    StarWarsApi.component( 'starships' , {
        'templateUrl': 'app/components/starships/starships.html',
        'controller': StarShips,
        'controllerAs': 'starshipsCtrl',
        'bindings': {
            'starships': '<'
        }
    });

    StarShips.$inject = ['CardsSerivce'];

    function StarShips(CardsSerivce){
        this.displayStarship = function(starship){
            CardsSerivce.addItem(starship, 'starships');
        }
    }
})();
