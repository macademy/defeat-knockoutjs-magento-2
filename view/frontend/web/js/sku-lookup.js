define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        }
    });
});
