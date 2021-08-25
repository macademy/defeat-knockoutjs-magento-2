define([
    'ko'
], function(
    ko
) {
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


    return {
        boxConfigurations: ko.observableArray([boxConfiguration()]),
        add: function() {
            this.boxConfigurations.push(boxConfiguration());
        },
        delete: function(index) {
            this.boxConfigurations.splice(index, 1);
        }
    };
});
