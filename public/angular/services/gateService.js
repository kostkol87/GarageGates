'use strict';

app.factory('GateService', NetworkService => {
	const URL_PATTERN_RQ = "./api/";
	return {

		getOpenGates: (onSuccess, onError) => {
			NetworkService.sendGet(URL_PATTERN_RQ + 'open', id, {}, onSuccess, onError);
		},

		getCloseGates: (onSuccess, onError) => {
			NetworkService.sendGet(URL_PATTERN_RQ + 'close', id, {}, onSuccess, onError);
		},
	};
});