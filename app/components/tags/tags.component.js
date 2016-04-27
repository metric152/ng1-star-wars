(function(){
    StarWarsApi.component( 'tags' , {
        'templateUrl': 'app/components/tags/tags.html',
        'controller': Tags,
        'controllerAs': 'tagsCtrl',
        'bindings': {
            'tags': '<',
            'type': '<'
        }
    });

    Tags.$inject = ['CardsSerivce'];

    function Tags(CardsSerivce){
        this.displayItem = function(item){
            CardsSerivce.addItem(item, this.type);
        }
    }
})();
