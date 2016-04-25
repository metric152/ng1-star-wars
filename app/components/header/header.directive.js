(function(){
    StarWarsApi.directive( 'header' , Header);

    Header.$inject = ['$rootScope', 'swapiService'];

    function Header($rootScope, swapiService){

        function getResources(){
            swapiService.resources().then(function(result){
                this.resources = result;
            }.bind(this));
        }

        function getResource(resource){
            swapiService[resource]().then(function(result){
                console.log( result );
            });
        }

        function controller($scope){
            angular.extend(this, {
                'resources': {},

                'getResources': getResources,
                'getResource': getResource
            });

            this.getResources();
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/header/header.template.html',
            'scope':{},
            'controller': ['$scope', controller],
            'controllerAs': 'headerCtrl',
            'bindToController': true
        };
    }
})();
