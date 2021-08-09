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
            placeholder: 'Example: 24-MB01',
            messageResponse: ko.observable(''),
            isSuccess: ko.observable(false)
        },
        initialize() {
            this._super();

            console.log('The skuLookup component has been loaded.');
        },
        handleSubmit() {
            this.messageResponse('');
            this.isSuccess(false);

            storage.get(`rest/V1/products/${this.sku()}`)
                .done(response => {
                    this.messageResponse(`Product found! <strong>${response.name}</strong>`);
                    this.isSuccess(true);
                })
                .fail(() => {
                    this.messageResponse('Product not found.');
                    this.isSuccess(false);
                })
        }
    });
});
