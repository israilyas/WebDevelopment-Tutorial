// counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end, duration){
    let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(()=>{
        current += increment;
        obj.textContent = current;
        if(current == end){
            clearInterval(timer)
        }
    },step);
    }
    // funtion ended 
    counter("counter1",400,2087,3000);
    counter("counter2",100,1670,3000);
    counter("counter3",0,1568,3000);
    counter("counter4",800,2341,3000);
});