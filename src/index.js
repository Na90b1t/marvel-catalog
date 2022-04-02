import axios from 'axios';

const url =
	'https://gist.githubusercontent.com/dev-pandaren/a3ad2d177d18402e609ec743676af80a/raw/3889c469f25c71ec11e628acdd12438742506504/guitar-catalog.json';


const url2 =
	'https://gist.githubusercontent.com/Na90b1t/8f7abc1d72e65f8e598e3334b68ec84c/raw/b554a446bae1bb53b00118e3ed16bd7abf2e3f64/catalog.json';

axios
	.get(url2)
	.then((result) => console.log(result.data))
	.catch((error) => console.log(error.message));
