//open this in devtools and see the result

console.log('this working!!')

let div = document.createElement('div'); //create element
div.classList.add('btn'); //add class to element

//add element to page - must be added to a parent
document.querySelector('.container').appendChild(div);