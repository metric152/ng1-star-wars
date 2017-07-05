(function(){
    StarWarsApi.component( 'container' , {
        'templateUrl': 'app/components/container/container.html',
        'controller': Container,
        'controllerAs': 'containerCtrl'
    });

    Container.$inject = ['CardsSerivce'];

    function Container(CardsSerivce){
        this.resources = {};

        this.getResources = function(){
            CardsSerivce.getResources([CardsSerivce.URI]).then(function(result){
                this.resources = result[0];
            }.bind(this));
        }

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            this.getResources();
        }
    }
})();
