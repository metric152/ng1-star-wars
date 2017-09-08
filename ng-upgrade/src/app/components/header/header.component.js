(function(){
    StarWarsApi.component( 'header' , {
        'templateUrl': 'app/components/header/header.template.html',
        'controller': Header,
        'controllerAs': 'headerCtrl',
        'bindings': {
            'resources': '<'
        }
    });

    Header.$inject = ['$routeParams','CardsService'];

    function Header($routeParams, CardsService){

        this.isActive = function(key){
            return $routeParams.type === key;
        }
    }
})();
