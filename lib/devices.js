var querystring = require('querystring');

module.exports = function (api) {
  /**
   * Returns a list of all devices associated with the current user
   * @param params Set supportedMethods=x to the methods supported by the client app 
   * @returns {Promise}
   */
  function list(params) {    
    params = params || { supportedMethods: 0 };
    return api.request('/devices/list?supportedMethods=' + params.supportedMethods);
  }

  /**
   * Returns info about a specific device
   * @param device either {id: anId} or anId   
   * @param params Set supportedMethods=x to the methods supported by the client app 
   * @returns {Promise}
   */
  function info(device, params) {
      params = params || { supportedMethods: 0 };
      return api.request('/device/info?' + querystring.stringify({ id: device.id || device, supportedMethods: params.supportedMethods }));
  }

  /**
   * Dims a device.
   * @param device either {id: anId} or anId
   * @returns {*} a Promise
   */
  function dim(device) {
      return api.request('/device/dim?' + querystring.stringify({ id: device.id || device }));
  }

  /**
   * Turns a device off
   * @param device either {id: anId} or anId
   * @returns {*} a Promise
   */
  function turnOn(device) {
    return api.request('/device/turnOn?' + querystring.stringify({id: device.id || device}));
  }

  /**
   * Turns a device on
   * @param device either {id: anId} or anId
   * @returns {*} a Promise
   */
  function turnOff(device) {
    return api.request('/device/turnOff?' + querystring.stringify({id: device.id || device}));
  }

  /**
   * Returns device history
   * @param device either {id: anId} or anId
   * @param from timestamp in seconds
   * @param to timestamp in seconds
   * @returns {*} a Promise
   */
  function history(device, from, to) {
    return api.request('/device/history?' + querystring.stringify({id: device.id || device, from: from, to: to}));
  }

  return {
    list: list,
    info: info,
    dim: dim,
    turnOn: turnOn,
    turnOff: turnOff,
    history: history
  };
};
