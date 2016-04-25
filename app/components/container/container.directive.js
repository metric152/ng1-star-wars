(function(){
    StarWarsApi.directive( 'container' , Container);

    Container.$inject = ['swapiService'];

    function Container(swapiService){

        function getResources(){
            swapiService.resources().then(function(result){
                this.resources = result;
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
