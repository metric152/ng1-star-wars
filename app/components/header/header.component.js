(function(){
    StarWarsApi.component( 'header' , {
        'templateUrl': 'app/components/header/header.template.html',
        'controller': Header,
        'controllerAs': 'headerCtrl',
        'bindings': {
            'resources': '<'
        }
    });

    Header.$inject = ['CardsService'];

    function Header(CardsService){

        this.getResource = function(type, resource){
            // Hit the endpoint and get data
            CardsService.getResources([resource]).then(function(result){
                // Store the type of list
                result[0].type = type;
                CardsService.resetList(result[0], 'list');
            }.bind(this));
        }
    }
})();
