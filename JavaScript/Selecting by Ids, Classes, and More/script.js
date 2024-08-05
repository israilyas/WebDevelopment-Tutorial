console.log("ISRA")

// select by CLASS---
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// select by ID---
// boxes[2].style.backgroundColor = 'red'
document.getElementById("my-box").style.background ="blue"

// select by QUERY     Only style first found element of this class name
document.querySelector(".box").style.background = "green"   
// for all 
document.querySelectorAll(".box").forEach(element => {
    element.style.background = "red";
});
/*
querySelectorAll   --> will eturn a node-list and we have to iterate it to apply style to all the elements
i.e 
NodeList(5) [div.box, div.box, div#my-box.box, div.box, div.box]
*/

// console.log(document.querySelectorAll(".box"))

// TAG-NAME

console.log(document.getElementsByTagName("div"))  
//HTMLCollection(6) [div.container, div.box, div.box, div#my-box.box, div.box, div.box, my-box: div#my-box.box]

// MATCHES, CLOSEST, CONTAIN

//The closest() method searches up the DOM tree for elements which matches a specified CSS selector.
//The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.
//The closest() method returns null() if no match is found.
let answer = document.getElementById("my-box").closest(".box")
console.log(answer)

//The contains() method returns true if a node is a descendant of a node.
//The contains() method returns false if not.
//A descendant can be a child, grandchild, great-grandchild, ...



