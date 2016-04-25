(function(){
    StarWarsApi.directive( 'cards' , Cards);

    Cards.$inject = ['$rootScope', 'swapiService'];

    function Cards($rootScope, swapiService){
        function controller($scope){
            angular.extend(this, {
                'resource': {}
            });

            // Listen for the data broadcast
            $rootScope.$on('resourceSelected', function(event, data){
                this.resource = data;
                console.log( data );
            }.bind(this));
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
