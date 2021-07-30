define([
    'uiComponent',
    'ko'
], function(
    Component,
    ko
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('ABC123'),
            placeholder: 'Example: 24-MB01'
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        }
    });
});
