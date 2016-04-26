(function(){
    StarWarsApi.directive( 'cards' , Cards);

    Cards.$inject = ['CardsSerivce', 'swapiService'];

    function Cards(CardsSerivce, swapiService){
        function controller($scope){
            angular.extend(this, {
                'items': CardsSerivce.getItems
            });
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/cards/cards.html',
            'scope':{},
            'controller': ['$scope', controller],
            'controllerAs': 'cardsCtrl',
            'bindToController': true
        };
    }
})();
