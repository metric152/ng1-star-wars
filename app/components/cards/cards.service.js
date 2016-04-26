(function(){
    StarWarsApi.service( 'CardsSerivce' , CardsSerivce);

    CardsSerivce.$inject = ['$http', '$q'];

    function CardsSerivce($http){
        var items = [];
        var films = {};

        this.getFilms = function(uriList){
            var deferred = $q.defer();
            var length = uriList.length;
            var results = [];

            function isDone(){
                if(--length == 0){
                    deferred.resolve(results);
                }
            }

            uriList.forEach(function(uri){
                if(films[uri]){
                    result.push(films[uri]);
                    isDone();
                }
                $http.get(uri).then( function(result){
                    films[uri] = result.data;
                    result.push(films[uri]);
                    isDone();
                })
            });

            return deferred.promise;
        }

        // Get the uri resource
        this.getResource = function(uri){
            return $http.get(uri).then(function(result){
                return result.data;
            });
        }

        // This will reset the list and clear everything else out
        this.resetList = function(item, type){
            items = [{
                'item': item,
                'type': type
            }]
        }

        /**
        * Add a new item to the list
        * @param item
        * @param type
        **/
        this.addItem = function(item, type){
            items.unshift({
                'item': item,
                'type': type
            });
        }

        // Get all the items in the list
        this.getItems = function(){
            return items;
        }
    }
})();
