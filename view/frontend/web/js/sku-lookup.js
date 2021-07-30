define([
    'uiComponent',
    'ko',
    'mage/storage'
], function(
    Component,
    ko,
    storage
) {
    'use strict';

    return Component.extend({
        defaults: {
            sku: ko.observable('24-MB01'),
            placeholder: 'Example: 24-MB01'
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    console.log(response);
                })
        }
    });
});
