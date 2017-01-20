var querystring = require('querystring');

module.exports = function (api) {
    /**
     * Returns a list of all events associated with the current user     
     * @returns {Promise} list of all events
     */
    function list() {
        return api.request('/events/list');
    }

    return {
        list: list
    };
};
