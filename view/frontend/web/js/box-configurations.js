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
            boxConfigurations: ko.observableArray([{
                length: 10,
                width: 12,
                height: 14
            }, {
                length: 13,
                width: 15,
                height: 17
            }])
        },
        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        }
    });
});
