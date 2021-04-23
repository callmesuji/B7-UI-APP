// let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a69cb3994e3144bfa854d35c2442cd0c`
let baseurl = `https://newsapi.org/v2/top-headlines?`;
let apiKey = 'a69cb3994e3144bfa854d35c2442cd0c';
// https://newsapi.org/v2/top-headlines?country=us&apiKey=a69cb3994e3144bfa854d35c2442cd0c

const countryEle = document.querySelector("#country");
const newscontentEle = document.querySelector(".newscontent");

countryEle.addEventListener('change',(event)=>{

    if(event.target.value !=""){
        let country = event.target.value;
      
        let url = `${baseurl}country=${country}&apiKey=${apiKey}`;
        let html = '';
        
        // let xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = function(){  
        //         if(this.readyState == 4 && this.status == 200){
        //            let newsItems = JSON.parse(this.responseText);
                //    let articles = newsItems.articles;
                //    for(let i=0;i<articles.length;i++){
                //        let title = articles[i].title;
                //        let imageUrl =  articles[i].urlToImage;
                //        let description = articles[i].description;
                //        let sourceurl = articles[i].url;

                //        html += `<div class="card mt-2">
                //        <img src=${imageUrl} class="card-img-top" alt="...">
                //        <div class="card-body">
                //          <h5 class="card-title">#${i+1}. ${title}</h5>
                //          <p class="card-text">${description}</p>
                //          <a href=${sourceurl} class="btn btn-primary" target="_blank">More...</a>
                //        </div>
                //      </div>`
                //    }
                //    newscontentEle.innerHTML = html;

        //         }
        // }
        // xhttp.open("GET",url,true);
        // xhttp.send();
        fetch(url)
            .then(response=>response.json())
            .then(newsItems=>{
                let articles = newsItems.articles;
                for(let i=0;i<articles.length;i++){
                    let title = articles[i].title;
                    let imageUrl =  articles[i].urlToImage;
                    let description = articles[i].description;
                    let sourceurl = articles[i].url;

                    html += `<div class="card mt-2">
                    <img src=${imageUrl} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">#${i+1}. ${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href=${sourceurl} class="btn btn-primary" target="_blank">More...</a>
                    </div>
                </div>`
            }
            newscontentEle.innerHTML = html;
        })

    }else{
        newscontentEle.innerHTML = "";
    }
})
