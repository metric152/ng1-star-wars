(function(){
    StarWarsApi.component( 'cards' , {
        'templateUrl': 'app/components/cards/cards.html',
        'controller': Cards,
        'controllerAs': 'cardsCtrl'
    });

    Cards.$inject = ['$routeParams', 'CardsService'];

    function Cards($routeParams, CardsService){
        this.items = CardsService.getItems;

        this.$onInit = function(){
            // Hit the endpoint and get data
            CardsService.getResources([CardsService.buildUrl($routeParams.type)]).then(function(result){
                // Store the type of list
                result[0].type = $routeParams.type;
                CardsService.resetList(result[0], 'list');
            }.bind(this));
        }
    }
})();
