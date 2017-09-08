(function(){
    StarWarsApi.component( 'cards' , {
        'templateUrl': 'app/components/cards/cards.html',
        'controller': Cards,
        'controllerAs': 'cardsCtrl',
        'bindings': {
            'results': '<',
            'type': '<'
        }
    });

    Cards.$inject = ['CardsService'];

    function Cards(CardsService){

        this.$onInit = function(){
            this.results[0].type = this.type;
            CardsService.resetList(this.results[0], 'list');

            this.items = CardsService.getItems;
        }
    }
})();
