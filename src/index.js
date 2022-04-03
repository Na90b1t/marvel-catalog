import 'regenerator-runtime/runtime';

import axios from 'axios';

const url = 'https://gateway.marvel.com/v1/public/comics';

const API_KEY = 'a5837db97d72016c81a7a776f4240db9';

// const url2 =
// 	'https://gist.githubusercontent.com/Na90b1t/8f7abc1d72e65f8e598e3334b68ec84c/raw/b554a446bae1bb53b00118e3ed16bd7abf2e3f64/catalog.json';
/* 
axios
	.get(url, {
		params: {
			apikey: API_KEY,
		},
	})
	.then((result) => console.log(result.data.data.results))
	.catch((error) => console.log(error.message));
 */
/*
Перепишем код выше, сделав универсальный класс, который отправляет запрос к серверу, 
возвращает нам Promise, с которым мы уже можем работать. 
В Promise будет содержаться результат этого запроса.
*/

class GetDataApi {
	async getData() {
		const response = await axios.get(url, {
			params: {
				apikey: API_KEY,
				limit: 50,
			},
		});

		// console.log(response.data.data.results);

		return response.data.data.results;
	}
}

const getDataApi = new GetDataApi();

/* const data = getDataApi.getData(url);

// console.log(data); // => Promise(pending) потому что мы получаем значение до того как выполнится асинхронная операция

data.then((result) => console.log(result)); */

/* 
Перепишем вышестоящий код с помощью асинхронной самовызывающейся ф-ии;
*/

(async () => {
	const data = await getDataApi.getData(url);
	console.log(data);
})();
