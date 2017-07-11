(function(){
    StarWarsApi.component( 'cards' , {
        'templateUrl': 'app/components/cards/cards.html',
        'controller': Cards,
        'controllerAs': 'cardsCtrl'
    });

    Cards.$inject = ['CardsService'];

    function Cards(CardsService){
        this.items = CardsService.getItems;
    }
})();
