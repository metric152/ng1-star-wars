(function(){
    StarWarsApi.directive( 'planet' , Planet);

    Planet.$inject = [];

    function Planet(){
        function controller($scope){
            angular.extend(this, {

            });
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/planet/planet.html',
            'scope':{
                'resource': '='
            },
            'controller': ['$scope', controller],
            'controllerAs': 'planetCtrl',
            'bindToController': true
        };
    }
})();
