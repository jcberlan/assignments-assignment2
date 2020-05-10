(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
        .controller('ColumnbuyListController', ColumnbuyListController)
        .controller('ColumnBoughtController', ColumnBoughtController)
        .service('ShoppingListservice', ShoppingListservice);

    ColumnbuyListController.$inject = ['ShoppingListservice'];

    function ColumnbuyListController(ShoppingListservice) {
        var  buylist = this;

         buylist.items = ShoppingListservice.getItems();

         buylist.buyItem = function(itemIndex) {
            ShoppingListservice.buyItem(itemIndex);
        };
    }

    ColumnBoughtController.$inject = ['ShoppingListservice'];

    function ColumnBoughtController(ShoppingListservice) {
        var  boughtList_ = this;

         boughtList_.items = ShoppingListservice.getAlreadyBoughtItems();
    }

    function ShoppingListservice() {
        var  forservice = this;
        var toBuyItems = [
              { name: "cookies", quantity: "∞" },
              { name: "water", quantity: "2 l" },
              { name: "beers", quantity: "never enough" },
              { name: "apples", quantity: "why not" },
              { name: "Steak", quantity: 4 }
        ];
        var alreadyBoughtItems = [];

         forservice.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

         forservice.getItems = function() {
            return toBuyItems;
        };

         forservice.getAlreadyBoughtItems = function() {
            return alreadyBoughtItems;
        };
    }
})();
