/**
 * Utility static class that has methods for fetching URL, "window.location" related information.
 */
class Location {

    /**
     * Get protocol string.
     * @returns {string} Returns the value without the ":".
     */
    static getProtocol() {
        return window.location.protocol.slice(0, -1);
    }

    /**
     * Get hostname string.
     * @returns {string}
     */
    static getHostName() {
        return window.location.hostname;
    }

    /**
     * Get port string.
     * @returns {string}
     */
    static getPort() {
        return window.location.port;
    }

    /**
     * Get path name string.
     * @returns {string}
     */
    static getPathName() {
        return window.location.pathname;
    }

    /**
     * Get hash string.
     * @returns {string} Returns empty string if there is no hash, otherwise returns the value without the "#".
     */
    static getHash() {
        return window.location.hash ? location.hash.slice(1): '';
    }

    /**
     * Get search parameters map. If there is no search parameters it will
     * @returns {map} If there is no search parameters it will return empty map.
     */
    static getSearchParameters() {
        let parameterMap = new Map();

        if ('undefined' == window.location.search) {
            return parameterMap;
        }

        let parameterString = (window.location.search).slice(1);

        let parameters = parameterString.split('&');

        for (let parameterIndex = 0, numberOfParameters = parameters.length; parameterIndex < numberOfParameters; parameterIndex++) {
            let param = parameters[parameterIndex].split('=');
            parameterMap.set(param[0], param[1]);
        }

        return parameterMap;
    }
}

export {Location};