define([
    'ko'
], function(
    ko
) {
    'use strict';

    ko.extenders.numeric = function(target, option) {
        const result = ko.pureComputed({
            read: target,
            write: function(value) {
                target(Math.round(value));
            }
        }).extend({notify: 'always'});

        result(target());

        return result;
    };
});
