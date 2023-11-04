const apiKey = process.env.NEWS_API_KEY;
let query = "";
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
const newsCustomQueryUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

async function fetchNews(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.articles);
		// TODO: Add a function call to display the news
		displayNews(data.articles);
	} catch (error) {
		console.error("There was an error!", error);
	}
}

fetchNews(newsUrl);

function displayNews(articles) {
	let mappedArticles = articles.filter((article) => article.author != null);

	const newsDiv = document.querySelector("#news");
	for (const article of mappedArticles) {
		const articleDiv = document.createElement("div");
		articleDiv.classList.add("article", "card");
		articleDiv.style.width = "18rem";
		//create card body div
		document.createElement("div");
		articleDiv.classList.add("card-body");

		//create and append a headline to the articleDiv, make headline a link
		const headline = document.createElement("a");
		headline.href = article.url;
		const cardText = document.createElement("p");
		cardText.classList.add("card-text");
		cardText.textContent = article.title; //.slice(0, 20) + "...";
		headline.appendChild(cardText);
		articleDiv.appendChild(headline);
		//create and add image to articleDiv, make image a link

		const image = document.createElement("img");
		image.classList.add("card-img-bottom");
		imageAnchor = document.createElement("a");
		imageAnchor.href = article.url;
		image.src = article.urlToImage;
		image.alt = article.title;
		imageAnchor.appendChild(image);
		articleDiv.appendChild(imageAnchor);
		// TODO: Use document.createElement and appendChild to create and append more elements

		newsDiv.appendChild(articleDiv);
	}
}

const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	//clear news div
	const newsDiv = document.querySelector("#news");
	newsDiv.innerHTML = "";
	query = input.value;
	const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
	fetchNews(url);
});

Promise.all([
	Promise.reject("rejected"),
	new Promise((res, rej) => setTimeout(() => res("first promise"), 3000)),
	new Promise((res, rej) => setTimeout(() => res("second promise"), 2000)),
	new Promise((res, rej) => setTimeout(() => res("third promise"), 1000)),
])
	.then(console.log)
	.catch(console.log);
