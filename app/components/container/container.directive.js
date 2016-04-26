(function(){
    StarWarsApi.directive( 'container' , Container);

    Container.$inject = ['CardsSerivce'];

    function Container(CardsSerivce){

        function getResources(){
            CardsSerivce.getResources([CardsSerivce.URI]).then(function(result){
                this.resources = result[0];
            }.bind(this));
        }

        function controller($scope){
            angular.extend(this, {
                'resources': {},
                'selectedResource': {},

                'getResources': getResources
            });

            this.getResources();
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/container/container.html',
            'scope':{},
            'controller': ['$scope', controller],
            'controllerAs': 'containerCtrl',
            'bindToController': true
        };
    }
})();
