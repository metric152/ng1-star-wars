(function(){
    StarWarsApi.component( 'cards' , {
        'templateUrl': 'app/components/cards/cards.html',
        'controller': Cards,
        'controllerAs': 'cardsCtrl'
    });

    Cards.$inject = ['CardsSerivce'];

    function Cards(CardsSerivce){
        this.items = CardsSerivce.getItems;
    }
})();
