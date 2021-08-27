define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/sku',
    'Macademy_InventoryFulfillment/js/model/box-configurations'
], function(
    Component,
    ko,
    skuModel,
    boxConfigurationsModel
) {
    'use strict';

    return Component.extend({
        defaults: {
            shipmentWeight: 0,
            billableWeight: 0,
            isTermsChecked: ko.observable(false)
        },
        initialize() {
            this._super();

            console.log('The reviewSubmit component has been loaded.');

            this.canSubmit = ko.computed(() => {
                return skuModel.isSuccess()
                    && boxConfigurationsModel.isSuccess()
                    && this.isTermsChecked();
            });

            this.numberOfBoxes = ko.computed(() => {
                return boxConfigurationsModel.boxConfigurations().reduce(function(runningTotal, boxConfiguration) {
                    return runningTotal + (boxConfiguration.numberOfBoxes() || 0);
                }, 0);
            });
        },
        handleSubmit() {
            if (this.canSubmit()) {
                console.log('The Review Submit form has been submitted.');
            } else {
                console.log('The Review Submit form has an error.');
            }
        }
    });
});
