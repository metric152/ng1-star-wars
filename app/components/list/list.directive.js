(function(){
    StarWarsApi.directive( 'list' , List);

    List.$inject = ['swapiService'];

    function List(swapiService){
        function displayItem(type, item){
            console.log( type, item );
        }

        function controller($scope){
            angular.extend(this, {
                'displayItem': displayItem
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
