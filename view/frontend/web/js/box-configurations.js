define([
    'uiComponent',
    'ko',
    'Macademy_InventoryFulfillment/js/model/box-configurations'
], function(
    Component,
    ko,
    boxConfigurationsModel
) {
    'use strict';

    return Component.extend({
        defaults: {
            boxConfigurationsModel: boxConfigurationsModel
        },
        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        },
        handleAdd() {
            boxConfigurationsModel.add();
        },
        handleDelete(index) {
            boxConfigurationsModel.delete(index);
        },
        handleSubmit() {
            console.log('Submitted box configuration form.');
        }
    });
});
