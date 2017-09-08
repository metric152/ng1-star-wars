(function(){
    StarWarsApi.component( 'header' , {
        'templateUrl': 'app/components/header/header.template.html',
        'controller': Header,
        'controllerAs': 'headerCtrl',
        'bindings': {
            'resources': '<'
        }
    });

    Header.$inject = ['$uiRouterGlobals'];

    function Header($uiRouterGlobals){
        this.isActive = function(key){
            return key === $uiRouterGlobals.params.type;
        }
    }
})();
