(function () {
    StarWarsApi.component('upgrade', {
        // 'templateUrl': 'app/components/upgrade-me/upgrade-me.html',
        'template': '<button ng-click="upgradeMeCtrl.iLive()">Click me 152</button>',
        "controller": UpgradeMe,
        "controllerAs": "upgradeMeCtrl",
        "bindings": {
        }
    });

    UpgradeMe.$inject = [];

    function UpgradeMe(){

        // New lifecycle call. Replaces the controller function
        this.$onInit = function(){
            console.log( "ng1 component loaded" );
        };

        this.iLive = function(){
            alert("I've been upgraded");
        };
    }
})();
