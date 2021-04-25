//let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a69cb3994e3144bfa854d35c2442cd0c`;
let baseurl = "https://newsapi.org/v2/top-headlines?";
let apikey = "a69cb3994e3144bfa854d35c2442cd0c";
const country = document.querySelector("#country");
const displaynews = document.querySelector(".displaynews");
country.addEventListener('change', (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value !== "") {
        let country_ele = event.target.value;
        let url = `${baseurl}country=${country_ele}&apiKey=${apikey}`;
        let html = "";
        fetch(url).then(response => response.json())
            .then(news => {
                let articles = news.articles;
                for (let i = 0; i < articles.length; i++) {
                    let title = articles[i].title;
                    let imageUrl = articles[i].urlToImage;
                    let description = articles[i].description;
                    let sourceurl = articles[i].url;
                    html += `<div class="card mt-2">
                    <img src=${imageUrl} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">#${i + 1}. ${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href=${sourceurl} class="btn btn-primary" target="_blank">More...</a>
                    </div>
                </div>`
                }
                displaynews.innerHTML = html;
            }).catch(error=>{
                alert("system is down try after some time"+error);
            })
    } else {
        displaynews.innerHTML = "";
    }
})
