(function() {
    StarWarsApi.component('list', {
        'templateUrl': 'app/components/list/list.html',
        'controller': List,
        'controllerAs': 'listCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    List.$inject = ['CardsService'];

    function List(CardsService) {

        this.displayItem = function(item) {
            CardsService.addItem(item, this.resource.type);
        }
    }
})();
