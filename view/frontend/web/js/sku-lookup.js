define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: '<em>ABC' + (1 + 2 + 3) + '</em>'
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        }
    });
});
