// Select the heading element
const heading = document.getElementById('heading');

// Change text content
heading.textContent = 'Hello, DOM!';

// Change style
heading.style.color = 'blue';
heading.style.fontSize = '24px';

// Add class
heading.classList.add('highlight');

// Remove class
heading.classList.remove('title');

// Toggle class
heading.classList.toggle('highlight');

// Toggle again
heading.classList.toggle('highlight');

// Set custom attribute
heading.setAttribute('data-info', 'This is a heading');

// Get attribute value
console.log(heading.getAttribute('data-info'));

// Remove attribute
heading.removeAttribute('data-info');


// =======================================
// innerText vs textContent vs innerHTML
// =======================================

const div = document.createElement('div');

div.innerHTML =
  '<p>This is a <span style="display: none;">paragraph</span>.</p>';

console.log(div.innerHTML);
// <p>This is a <span style="display: none;">paragraph</span>.</p>

console.log(div.textContent);
// This is a paragraph.

console.log(div.innerText);
// This is a .


// =======================================
// querySelector and querySelectorAll
// =======================================

const firstParagraph = document.querySelector('p');

console.log(firstParagraph);

const allParagraphs = document.querySelectorAll('p');

console.log(allParagraphs);

allParagraphs.forEach((p) => {
    console.log(p.textContent);
});


// =======================================
// getAttribute() and setAttribute()
// =======================================

const link = document.getElementById("link");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://bing.com");

console.log(link.getAttribute("href"));

document.getElementById("link")
    .getAttribute("href");

document.getElementById("link")
    .setAttribute("href", "https://example.com");

// setAttribute overwrites the old value
// getAttribute retrieves the current value


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