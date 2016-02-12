(function (exports) {

    'use strict';

    var STORAGE_KEY = 'PUSHWOOSH_NOTIFICATIONS';

    exports.notificationStorage = {
        fetch: function () {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        },
        save: function (notifications) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
        }
    };

})(window);