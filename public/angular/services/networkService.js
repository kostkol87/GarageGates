'use strict';

app.factory('NetworkService', ($http,) => {
    return {
        sendGet: (url, data, parameters, onSuccess, onError) =>{
            $http.get(url + data, parameters).then(onSuccess, onError)
        },

        sendPost: (url, data, parameters, onSuccess, onError) => {
	        $http.post(url, data, parameters).then(onSuccess, onError)
        },

	    sendPut: (url, data, parameters, onSuccess, onError) => {
		    $http.put(url, data, parameters).then(onSuccess, onError)
	    },

	    sendDelete: (url, data, parameters, onSuccess, onError) => {
		    $http.delete(url, data, parameters).then(onSuccess, onError)
	    }
    }
});