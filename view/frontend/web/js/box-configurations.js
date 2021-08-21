define([
    'uiComponent',
    'ko'
], function(
    Component,
    ko
) {
    'use strict';

    const boxConfiguration = () => {
        return {
            length: ko.observable(),
            width: ko.observable(),
            height: ko.observable(),
            weight: ko.observable(),
            unitsPerBox: ko.observable(),
            numberOfBoxes: ko.observable(),
        };
    };

    return Component.extend({
        defaults: {
            boxConfigurations: ko.observableArray([boxConfiguration()])
        },
        initialize() {
            this._super();

            console.log('The boxConfigurations component has been loaded.');
        },
        handleAdd() {
            this.boxConfigurations.push(boxConfiguration());
        }
    });
});
