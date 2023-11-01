const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
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

fetchNews();

function displayNews(articles) {
	const newsDiv = document.querySelector("#news");
	for (const article of articles) {
		const articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

		//create and append a headline to the articleDiv, make headline a link
        const headline = document.createElement("a");
        headline.href = article.url;
		const title = document.createElement("h4");
		title.textContent = article.title.slice(0, 20) + "...";
		headline.appendChild(title);
        articleDiv.appendChild(headline);
        //create and add image to articleDiv, make image a link

        const image = document.createElement("img");
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