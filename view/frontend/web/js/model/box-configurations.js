define([
    'ko'
], function(
    ko
) {
    const boxConfiguration = () => {
        const divisor = 139;
        const data = {
            length: ko.observable(),
            width: ko.observable(),
            height: ko.observable(),
            weight: ko.observable(),
            unitsPerBox: ko.observable(),
            numberOfBoxes: ko.observable(),
        };

        data.dimensionalWeight = ko.computed(() => {
            const result = data.length() * data.width() * data.height() / divisor;
            return Math.round(result * data.numberOfBoxes());
        });

        return data;
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
