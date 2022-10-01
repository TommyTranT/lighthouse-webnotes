# Windows

```js
const heading = document.getElementsByClassName('content')[0]

heading.addEventListener('mousemove', (event) => {console.log(event)});

// If i hover over 'content', the event of mouse moving will be in my console.log

```

# Adding DOM in Tree in Browser
Can put in script
```js
const list = document.getElementById('main-list');
    // <ul id="main-list">
    //   <li>One</li>
    //   <li>Two</li>
    //   <li>Three</li>
    // </ul>

const node = document.createElement("li");
// <li></li>

const textnode = document.createTextNode("Water");
// Water

node.appendChild(textnode);

//<li>Water</li>

list.appendChild(node)
// <ul id="main-list">
//       <li>One</li>
//       <li>Two</li>
//       <li>Three</li>
//       <li>Water</li>
// </ul>
```

# Setting this up in a seperate File
We could just put that code in our script in our HTML file, but we are going to put it in a JS file called 'app.js' 

Now in our html file:
```html
<script src="app.js"></script>
```
# JQuery Setup

CDN (Content Delivery Network) are servers around the world. Allows data to download faster.

google cdn jquery, get link

# Moving around the DOM 

```js
const myList = jQuery('#main-list');

myList.children() // -> shows the children
myList.sibling() 
myList.parent()
```