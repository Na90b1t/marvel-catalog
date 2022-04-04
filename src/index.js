import 'regenerator-runtime/runtime';

import { API_URL, URL_COMICS } from './constants/api.js';

import { getDataApi } from './utils/getDataApi.js';

(async () => {
	const data = await getDataApi.getData(API_URL + URL_COMICS);
	console.log('Результат', data);
})();
