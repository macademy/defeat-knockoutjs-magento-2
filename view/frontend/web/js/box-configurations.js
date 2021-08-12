define([
    'uiComponent'
], function(
    Component
) {
    'use strict';

    return Component.extend({
        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        }
    });
});
