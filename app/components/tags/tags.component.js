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

    Tags.$inject = ['CardsService'];

    function Tags(CardsService){
        this.displayItem = function(item){
            CardsService.addItem(item, this.type);
        }
    }
})();
