(function(){
    StarWarsApi.service( 'CardsSerivce' , CardsSerivce);

    CardsSerivce.$inject = ['$http', '$q'];

    function CardsSerivce($http, $q){
        var items = [];
        var cache = {};

        this.URI = 'http://swapi.co/api/';

        function isItemInCache(key){
            return !!cache[key];
        }

        function getItemFromCache(key){
            if(isItemInCache(key)) {
                return cache[key];
            }
            return null;
        }
        
        function setItemInCache(key, value){
            if(!cache[key]){
                cache[key] = value;
            }
        }

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
                if(isItemInCache(uri)){
                    results.push(getItemFromCache(uri));
                    isDone();
                }
                else{
                    $http.get(uri).then( function(result){
                        setItemInCache(uri, result.data);
                        results.push(result.data);
                        isDone();
                    });
                }
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
            // See if we can cache the item
            if(item['url']){
                setItemInCache(item['url'], item);
            }

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
