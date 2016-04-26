(function(){
    StarWarsApi.directive( 'person' , Person);

    Person.$inject = [];

    function Person(){
        function controller($scope){
            angular.extend(this, {

            });
        }

        return {
            'restrict': 'E',
            'templateUrl': 'app/components/person/person.html',
            'scope':{
                'resource': '='
            },
            'controller': ['$scope', controller],
            'controllerAs': 'personCtrl',
            'bindToController': true
        };
    }
})();
