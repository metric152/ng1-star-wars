(function(){
    StarWarsApi.directive( 'header' , Header);

    Header.$inject = ['CardsSerivce'];

    function Header(CardsSerivce){

        function getResource(resource){
            // Hit the endpoint and get data
            CardsSerivce.getResources([sprintf("%s%s",CardsSerivce.URI, resource)]).then(function(result){
                // Store the type of list
                result[0].type = resource;
                CardsSerivce.resetList(result[0], 'list');
            }.bind(this));
        }

        function controller(){
            angular.extend(this, {
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
