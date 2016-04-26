(function(){
    StarWarsApi.component( 'vehicles' , {
        'templateUrl': 'app/components/vehicles/vehicles.html',
        'controller': Vehicles,
        'controllerAs': 'vehiclesCtrl',
        'bindings': {
            'vehicles': '<'
        }
    });

    Vehicles.$inject = ['CardsSerivce'];

    function Vehicles(CardsSerivce){
        this.displayVehicle = function(vehicle){
            CardsSerivce.addItem(vehicle, 'vehicles');
        }
        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){

        }
    }
})();
