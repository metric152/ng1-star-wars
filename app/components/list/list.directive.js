(function(){
    StarWarsApi.directive( 'list' , List);

    List.$inject = ['CardsSerivce'];

    function List(CardsSerivce){
        
        function displayItem(item){
            CardsSerivce.addItem(item, this.resource.type);
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
