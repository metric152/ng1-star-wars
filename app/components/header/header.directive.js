(function(){
    StarWarsApi.directive( 'header' , Header);

    Header.$inject = ['CardsSerivce', 'swapiService'];

    function Header(CardsSerivce, swapiService){

        function getResource(resource){
            // Hit the endpoint and get data
            swapiService[resource]().then(function(result){
                // Store the type of list
                result.type = resource;
                CardsSerivce.resetList(result, 'list');
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
