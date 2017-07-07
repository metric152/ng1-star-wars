(function(){
    StarWarsApi.factory('LookupsFactory', Lookups);

    Lookups.$inject = ['CardsService'];

    function Lookups(CardsService){
        var lookups = function(classObject){

            // Destination objects for the calls
            classObject.films = null;
            classObject.vehicles = null;
            classObject.starships = null;
            classObject.planets = null;
            classObject.people = null;

            // List the films
            classObject.getFilms = function(films){
                CardsService.getResources(films).then( function(results){
                    classObject.films = results;
                });
            }

            // Get the vehicles
            classObject.getVehicles = function(vehicles){
                CardsService.getResources(vehicles).then( function(results){
                    classObject.vehicles = results;
                });
            }

            // Get starships
            classObject.getStarships = function(starships){
                CardsService.getResources(starships).then( function(results){
                    classObject.starships = results;
                });
            }

            // Get planets
            classObject.getPlanets = function(planets){
                CardsService.getResources(planets).then( function(results){
                    classObject.planets = results;
                });
            }

            // Get people
            classObject.getPeople = function(people){
                CardsService.getResources(people).then( function(results){
                    classObject.people = results;
                });
            }
        }

        return (lookups);
    }
})();
