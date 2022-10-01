// const node = document.createElement("li");
// const textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("main-list").appendChild(node);

// console.log(`Name: ${userName}`)

// Lets do the code above in JQuery

// const $ = jQuery

// $('li') -> find an li
// $('<li>') -> create an li

// If jQuery variable, add $ infront to let others know

// Document Ready lets us put our script anywhere. Wont run until doc is ready
$(() => {
  
  // Does 3 steps in one. Create li and add text to it
  const $node = $('<li>').text('Something Else');
  const $mainList = $('#main-list');
  
  // 2 Options = Does same thing!
  // $mainList.append($node);
  // $node.appendTo($mainList);
  
  $mainList.append($node);
  
  // Make an input and button text
  
  // Grab the button by the ID
  const $button = $('#add-new-list-item');
  
  // Listen to click, run the function
  $button.on('click', ()=> {
    console.log('i got clicked!');
  
    // Grab the Input field by the ID
    const $input = $('#new-list-item');
  
    // Inputs keep the users inputs in the value field. Lets grab the value
    // Input fields are self closing so they cant have children
    const value = $input.val();
  
    // console.log('value', value);
  
    // Make new element(li) and put the value under it
    const $li = $('<li>').text(value);
  
    // Side note. Click on it to delete it. 
    // Easier to add functions when you make it
  
    $li.on('click', () => {
      $li.remove();
    })
  
    // prepend (add to TOP of list) to main-list
    $li.prependTo($mainList);
  
    // Make the input field empty
    // Declare nothing in the value of the input field.
    $input.val('')
  
    // Now we dont have to keep clicking the input field
    $input.focus();
  });
})
