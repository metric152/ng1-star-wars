(function(){
    StarWarsApi.service( 'CardsSerivce' , CardsSerivce);

    CardsSerivce.$inject = ['$http', '$q'];

    function CardsSerivce($http, $q){
        var items = [];
        var cache = {};

        this.URI = 'http://swapi.co/api/';

        this.getResources = function(uriList){
            var deferred = $q.defer();
            var length = uriList.length;
            var results = [];

            function isDone(){
                if(--length == 0){
                    deferred.resolve(results);
                }
            }

            uriList.forEach(function(uri){
                if(cache[uri]){
                    results.push(cache[uri]);
                    isDone();
                }
                $http.get(uri).then( function(result){
                    cache[uri] = result.data;
                    results.push(cache[uri]);
                    isDone();
                })
            });

            return deferred.promise;
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
