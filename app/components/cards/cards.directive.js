(function(){
    StarWarsApi.directive( 'cards' , Cards);

    Cards.$inject = ['CardsSerivce'];

    function Cards(CardsSerivce){
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
