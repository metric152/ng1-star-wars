(function(){
    StarWarsApi.component( 'vehicle' , {
        'templateUrl': 'app/components/vehicle/vehicle.html',
        'controller': Vehicle,
        'controllerAs': 'vehicleCtrl',
        'bindings': {
            'resource': '<'
        }
    });

    Vehicle.$inject = ['LookupsFactory'];

    function Vehicle(LookupsFactory){
        LookupsFactory(this);

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            this.getFilms(this.resource.films);
        }
    }
})();
