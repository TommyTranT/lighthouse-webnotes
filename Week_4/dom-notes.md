# Dom Events

They occur on a webpage when a user moves their mouse, clicks, double clicks, scrolls and presses a key

# Need to add Event Listeners

Consider the following code:
```jsx
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="div-one">Click me!</div>
    <div id="div-two">No! Click Me!</div>
  </body>
</html>
```

To make your page interactive:
  1. Add an event listener to a DOM node
  2. Specify which event it should listen for
  3. Add a function that runs after the event happens

`addEventListener` is a method available to any element/DOM node. It lets you specify the type of event (e.g. click) and a callback function that should be triggered when that event happens.

```jsx
// creates an event listener for the 'document' node
document.addEventListener("click", () => {
  console.log("You just clicked somewhere on this page.");
});
```
Because the root (document) is specified, the event is triggered when you click anywhere on the page.

# Only listen to Clicks for specific node

Let's say you wanted to only listen for clicks on a specific node of the page (e.g. <div class="div-one"> from the html above):

```jsx
// specify the DOM node to refer to using the document.getElementById method and put reference in a variable
const div1 = document.getElementById("div-one");

// when div1 is clicked, run the function
div1.addEventListener("click", () -> {
  console.log("You clicked on div 1.");
});
```

The next example uses a function with a name.
```jsx
// create a function
const printMessage = () => {
  console.log('You clicked on div 2.');
});

// put a reference to the "div-two" element in a variable
const div2 = document.getElementById("div-two");

// when div2 is clicked, run the function
div2.addEventListener('click', printMessage);

```
# Event Objects

Event happens, an object is created that contains all the info about that event

# Typing into a box
Many events happen when you have an input, keyup, keypress and keydown.