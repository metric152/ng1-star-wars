(function(){
    StarWarsApi.service( 'CardsSerivce' , CardsSerivce);

    CardsSerivce.$inject = [];

    function CardsSerivce(){
        var items = [];

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
