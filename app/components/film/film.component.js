(function(){
    StarWarsApi.component( 'film' , {
        'templateUrl': 'app/components/film/film.html',
        'controller': Film,
        'controllerAs': 'filmCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Film.$inject = [];

    function Film(){

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){

        }
    }
})();
