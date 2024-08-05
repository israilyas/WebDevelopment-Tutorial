let button = document.getElementById("btn")
// button.addEventListener("click", ()=>{
//     // alert("I was clicked")
//     document.querySelector(".box").innerHTML = "<b>I was Clicked</b> Enjoy you click"
// })
button.addEventListener("dblclick", ()=>{
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>I was Clicked</b> Enjoy you click"
})

// button.addEventListener("contextmenu", ()=>{
//     alert("Don't hack us by right click")  
// })

document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode)
})

//LIST OF MOUSE EVENTS  --> " https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events "