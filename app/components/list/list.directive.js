(function(){
    StarWarsApi.directive( 'list' , List);

    List.$inject = ['swapiService'];

    function List(swapiService){
        function controller($scope){
            angular.extend(this, {

            });
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/list/list.html',
            'scope':{
                'resource': '='
            },
            'controller': ['$scope', controller],
            'controllerAs': 'listCtrl',
            'bindToController': true
        };
    }
})();
