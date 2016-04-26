(function(){
    StarWarsApi.component( 'people' , {
        'templateUrl': 'app/components/people/people.html',
        'controller': People,
        'controllerAs': 'peopleCtrl',
        'bindings': {
            'people': '<'
        }
    });

    People.$inject = ['CardsSerivce'];

    function People(CardsSerivce){
        this.displayPerson = function(person){
            CardsSerivce.addItem(person, 'people');
        }
    }
})();
