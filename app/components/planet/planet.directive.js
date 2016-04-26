(function(){
    StarWarsApi.component( 'planet' , {
        'templateUrl': 'app/components/planet/planet.html',
        'controller': Planet,
        'controllerAs': 'planetCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Planet.$inject = [];

    function Planet(){
        
    }
})();
