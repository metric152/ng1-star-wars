(function(){
    StarWarsApi.component( 'starship' , {
        'templateUrl': 'app/components/starship/starship.html',
        'controller': Starship,
        'controllerAs': 'starshipCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Starship.$inject = [];

    function Starship(){
        // TODO Add films
        // TODO Add pilots
        
        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){

        }
    }
})();
