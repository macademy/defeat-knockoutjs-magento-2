define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/sku',
    'Macademy_InventoryFulfillment/js/model/box-configurations',
    'mage/url',
    'mage/storage'
], function(
    Component,
    ko,
    skuModel,
    boxConfigurationsModel,
    url,
    storage
) {
    'use strict';

    return Component.extend({
        defaults: {
            numberOfBoxes: boxConfigurationsModel.numberOfBoxes(),
            shipmentWeight: boxConfigurationsModel.shipmentWeight(),
            billableWeight: boxConfigurationsModel.billableWeight(),
            isTermsChecked: ko.observable(false),
            boxConfigurationsIsSuccess: boxConfigurationsModel.isSuccess,
            boxConfigurations: boxConfigurationsModel.boxConfigurations,
            sku: skuModel.sku
        },
        initialize() {
            this._super();

            console.log('The reviewSubmit component has been loaded.');

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
            });
        },
        handleSubmit() {
            if (this.canSubmit()) {
                console.log('The Review Submit form has been submitted.');

                storage
                    .post(this.getUrl(), {
                        'sku': skuModel.sku(),
                        'boxConfigurations': ko.toJSON(boxConfigurationsModel.boxConfigurations)
                    })
                    .done(response => console.log('Response', response))
                    .fail(err => console.log('Error', err));
            } else {
                console.log('The Review Submit form has an error.');
            }
        },
        getUrl() {
            return url.build('inventory-fulfillment/index/post');
        }
    });
});
