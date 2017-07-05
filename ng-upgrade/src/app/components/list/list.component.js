(function(){
    StarWarsApi.component( 'list' , {
        'templateUrl': 'app/components/list/list.html',
        'controller': List,
        'controllerAs': 'listCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    List.$inject = ['CardsSerivce'];

    function List(CardsSerivce){

        this.displayItem = function(item){
            CardsSerivce.addItem(item, this.resource.type);
        }
    }
})();
