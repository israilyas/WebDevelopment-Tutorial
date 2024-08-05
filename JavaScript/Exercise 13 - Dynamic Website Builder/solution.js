function createCard(title, cName,views,monthsOld,duration,thumbnail){
    // finish this function
    let viewCount
    if(views>=1000 & visualViewport<=1000000){
        viewCount = views/1000 + "K"
    }
    else if(views>1000000){
        viewCount = views/1000000 + "M"
    }
    else if(views<1000){
        viewCount = viewsw2s
    }
 
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <p class="capsule">${duration}</p>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p class="details">${cName} . ${viewCount} views . ${monthsOld} months old</p>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML+html
}

let card2 = createCard("JavaScript Exercise 13 - Solution & Shoutouts | Sigma Web Development Course - Tutorial #77","CodeWithHarry",200000,3,"24:12","https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ")

