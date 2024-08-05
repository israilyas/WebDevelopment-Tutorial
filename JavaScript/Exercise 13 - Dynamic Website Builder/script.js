const cardContainer = document.getElementsByClassName("container")[0]

function createCard(title,cName,monthsOld,duration,views,picUrl ){
    let card_div = document.createElement("div")
    card_div.classList.add("card")
    
    let image_div = document.createElement("div")
    image_div.classList.add("image")
    card_div.appendChild(image_div)

    image_div.src = picUrl

    let v_duration = document.createElement("p")
    v_duration.classList.add("duration")
    v_duration.textContent = duration
    image_div.appendChild(v_duration)
    
    let content = document.createElement("div")
    content.classList.add("title")
    card_div.appendChild(content)

    let c_heading = document.createElement("p")
    c_heading.textContent = title
    content.appendChild(c_heading)

    let ch_details = document.createElement("p")
    ch_details.classList.add("details")
    
    let channel_name = document.createElement("span")
    channel_name.classList.add("cName")
    channel_name.textContent = cName
    ch_details.appendChild(channel_name)

    let video_views = document.createElement("span")
    video_views.classList.add("views")
    video_views.textContent = views
    ch_details.appendChild(video_views)

    let video_age = document.createElement("span")
    video_age.classList.add("monthsOld")
    video_age.textContent = monthsOld
    ch_details.appendChild(video_age)

    cardContainer.appendChild(card_div)

}

//createCard(title,cName,monthsOld,duration,views,image)
let picture = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"

