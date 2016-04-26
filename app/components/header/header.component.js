(function(){
    StarWarsApi.component( 'header' , {
        'templateUrl': 'app/components/header/header.template.html',
        'controller': Header,
        'controllerAs': 'headerCtrl',
        'bindings': {
            'resources': '<'
        }
    });

    Header.$inject = ['CardsSerivce'];

    function Header(CardsSerivce){

        this.getResource = function(resource){
            // Hit the endpoint and get data
            CardsSerivce.getResources([sprintf("%s%s",CardsSerivce.URI, resource)]).then(function(result){
                // Store the type of list
                result[0].type = resource;
                CardsSerivce.resetList(result[0], 'list');
            }.bind(this));
        }
    }
})();