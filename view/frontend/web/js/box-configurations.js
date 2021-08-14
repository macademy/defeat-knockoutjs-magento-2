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
            boxConfigurations: ko.observableArray(['abc', 'def'])
        },
        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        }
    });
});
