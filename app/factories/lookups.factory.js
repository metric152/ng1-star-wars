(function(){
    StarWarsApi.factory('LookupsFactory', Lookups);

    Lookups.$inject = ['CardsSerivce'];

    function Lookups(CardsSerivce){
        var lookups = function(classObject){

            // Destination objects for the calls
            classObject.films = null;
            classObject.vehicles = null;
            classObject.starships = null;
            classObject.planets = null;
            classObject.people = null;

            // List the films
            classObject.getFilms = function(films){
                CardsSerivce.getResources(films).then( function(results){
                    classObject.films = results;
                });
            }

            // Get the vehicles
            classObject.getVehicles = function(vehicles){
                CardsSerivce.getResources(vehicles).then( function(results){
                    classObject.vehicles = results;
                });
            }

            // Get starships
            classObject.getStarships = function(starships){
                CardsSerivce.getResources(starships).then( function(results){
                    classObject.starships = results;
                });
            }

            // Get planets
            classObject.getPlanets = function(planets){
                CardsSerivce.getResources(planets).then( function(results){
                    classObject.planets = results;
                });
            }

            // Get people
            classObject.getPeople = function(people){
                CardsSerivce.getResources(people).then( function(results){
                    classObject.people = results;
                });
            }
        }

        return (lookups);
    }
})();
