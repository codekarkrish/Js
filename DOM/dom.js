// =======================================
// Select the heading element
// =======================================

const heading = document.getElementById('heading');


// =======================================
// Change text content
// =======================================

heading.textContent = 'Hello, DOM!';


// =======================================
// Change style
// =======================================

heading.style.color = 'blue';
heading.style.fontSize = '24px';


// =======================================
// ClassList Methods
// =======================================

// Add class
heading.classList.add('highlight');

// Remove class
heading.classList.remove('title');

// Toggle class
heading.classList.toggle('highlight');

// Toggle again
heading.classList.toggle('highlight');


// =======================================
// Attribute Methods
// =======================================

// Set custom attribute
heading.setAttribute('data-info', 'This is a heading');

// Get attribute value
console.log(heading.getAttribute('data-info'));

// Remove attribute
heading.removeAttribute('data-info');


// =======================================
// innerHTML vs textContent vs innerText
// =======================================

const div = document.createElement('div');

div.innerHTML =
    '<p>This is a <span style="display: none;">paragraph</span>.</p>';

// Add div to body
document.body.appendChild(div);

console.log(div.innerHTML);

console.log(div.textContent);

console.log(div.innerText);


// =======================================
// querySelector and querySelectorAll
// =======================================

// First paragraph
const firstParagraph = document.querySelector('p');

console.log(firstParagraph);

// All paragraphs
const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs);

// Loop through paragraphs
allParagraphs.forEach((p) => {
    console.log(p.textContent);
});// output is: This is a paragraph.

// const allh2 = document.querySelectorAll('h2')
// undefined
// allh2[0].innerText

// =======================================
// getAttribute() and setAttribute()
// =======================================

const link = document.getElementById("link");

// Get href value
console.log(link.getAttribute("href"));

// Change href
link.setAttribute("href", "https://bing.com");

// Check updated href
console.log(link.getAttribute("href"));

// Another example
document.getElementById("link")
    .setAttribute("href", "https://example.com");


// =======================================
// CSS Styling
// =======================================

const box = document.getElementById('box');

box.style.width = '200px';
box.style.height = '200px';
box.style.backgroundColor = 'red';


// =======================================
// forEach Example
// =======================================

const tempLiList = document.querySelectorAll('.list-item');

tempLiList.forEach(function(li) {
    li.style.backgroundColor = 'yellow';
});
// Note: querySelectorAll returns a NodeList which supports forEach directly

// =======================================
// Change Heading Color
// =======================================

const myH1 = document.querySelectorAll('h1');

myH1[0].style.color = 'blue';


// =======================================
// getElementsByClassName
// =======================================

const tempClassList =
    document.getElementsByClassName('list-item');

console.log(tempClassList);

// HTMLCollection does NOT support forEach directly

Array.from(tempClassList).forEach(function(li) {
    console.log(li);
});



// create a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

// Append to body
//appendchild() means add the new element as a child of the specified parent element. In this case, we are adding the new paragraph to the container div.
document.getElementById("container").appendChild(newParagraph);

const heading = document.getElementById("heading");

heading.textContent = "New Heading";

heading.innerHTML = "<span>New HTML Heading</span>";

heading.style.color = "blue";
heading.style.fontSize = "40px";
heading.setAttribute("class", "title");
heading.classList.add("highlight");//o/p will be : <h1 id="heading" class="title highlight"><span>New HTML Heading</span></h1>
heading.classList.remove("title");//o/p will be : <h1 id="heading" class="highlight"><span>New HTML Heading</span></h1>
heading.classList.toggle("active");//o/p will be : <h1 id="heading" class="highlight active"><span>New HTML Heading</span></h1>
heading.classList.toggle("active");//o/p will be : <h1 id="heading" class="highlight"><span>New HTML Heading</span></h1>
//toggle will add the class if it doesn't exist, and remove it if it does exist.

//remove dom elements

const para = document.getElementById("para");

para.remove();

// removeChild example

const parent = document.querySelector("ul");

const child = document.querySelector("li");

parent.removeChild(child);// Note: removeChild is used to remove a child element from a parent element. The child element must be a direct descendant of the parent element.
// Removes <li> from <ul>.


//appendchiled revision 

function addLanguage(lang){
    const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(lang));
    document.querySelector(".language-list").appendChild(newLi);
    }

addLanguage("JavaScript");
addLanguage("Python");
//edit
const secondLang = document.querySelector("li:nth-child(2)");
console.log(secondLang);
const newLi = document.createElement("li");
newLi.textContent = "C++";
secondLang.replaceWith(newLi);
//replaceWith() method replaces the specified element with another element. In this case, we are replacing the second <li> element with a new <li> element that contains the text "C++".    