(function(){
    StarWarsApi.directive( 'header' , Header);

    Header.$inject = ['$rootScope', 'swapiService'];

    function Header($rootScope, swapiService){

        function getResource(resource){
            // Hit the endpoint and get data
            swapiService[resource]().then(function(result){
                // So we know the type of data
                result['name'] = resource;
                this.selectedResource = result;

                // Send the data to the cards directive
                $rootScope.$broadcast('resourceSelected', result);
            }.bind(this));
        }

        function controller(){
            angular.extend(this, {
                'selectedResource': {},
                'getResource': getResource
            });
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/header/header.template.html',
            'scope':{
                'resources': '='
            },
            'controller': ['$scope', controller],
            'controllerAs': 'headerCtrl',
            'bindToController': true
        };
    }
})();
