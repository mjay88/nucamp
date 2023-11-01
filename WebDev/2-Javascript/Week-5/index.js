const URL = `https://api.thecatapi.com/v1/images/search`;
const img = document.querySelector('img');
console.log(img);
async function fetchCats() {
    console.log('firing')
	try {
		let response = await fetch(URL);
		let responseJSON = await response.json();
        img.setAttribute('src', responseJSON[0].url);
	} catch (err) {
		console.log(err, 'something went wrong');
	}
}
