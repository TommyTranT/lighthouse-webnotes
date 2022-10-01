# JQuery
Need to get Jquery tag. Google 'jquery cdn'
```html
<script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
```
Add a JS to your html file
```html
<script src="/javascripts/index.js"></script>
```

```js
// JQuery
// article refers to <article> in html page. On click do something
$('article').on('click', (event) => {
//
});

// Use 'ready' so that it will only run if document is ready.

$(document).ready(() => {
  //...
})
```

Create an element in jquery
```js
$("<article>");
```

# Change background color of css element
In this case, we have an element called article and we will change the 'background-color' with a function.
```js
// Using doc.ready to scope whole document
<script>
$(document).ready(() => {

  // Random color generator
    const randomColor = () => {
    const r = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)

    return `rbg(${r},${g},${b})`;
  };

// Use JQuery
  $('article').on('click', (event) => {
    // hey article, you know your css?, you know your background color? I want result of randomColor in there. 
    $("article").css('background-color', randomColor())
  });
})

<script>

```

Problem: They all change. Only want one article to change.

```js
<script>
$(document).ready(() => {
  const randomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)

  return `rbg(${r},${g},${b})`;
};

// Use JQuery
  $('article').on('click', (event) => {
    // Use event.target to target the actual element, not all elements
    $(event.target).css('background-color', randomColor())
  });
})

<script>

```

# Create new blog post with a click
```html
<!-- HTML Page -->
<section>
  <article>
    <h1>Blog title</h1>
    <p>
      Listen again to the legends of the BIONICLE
    </p>
  </article>
</section>
<button>ADD AN ARTICLE</button>
```

```js
// JS Page

// Need to be in document.ready from above
$(document).ready(() => {
//...

// Hey button, when I click, caw this n you find this 'section', and then append this text there :
$('button').click(() => {
  $("section").append("
  <article>
    <h1>Blog title</h1>
      <p>
        Listen again to the legends of the BIONICLE
      </p>
  </article>
    ");
  })
}); // END OF DOCUMENT READY DONT GO FURTHER
// Problem: It adds new blog but cant change its bg colors like the other ones. Lots of issues when adding an event listener.
```

# Adding Event on new blog post


```js
$(document).ready(() => {
//...

$('button').click(() => {
 
 // Making new elements
 const newArticle = $("<article>");
 const articleTitle = $("<h1>");
 const articleContent = $("<p>");

// Hardcoding content in the elements
 articleContent.text("Listen again to the legends of the BIONICLE")
 articleTitle.text("Blog title")

// Adding the elements with content to "article" element.
 newArticle.append(articleTitle)
 newArticle.append(articleContent)

// Now adding CLICK event to just new article.
 newArticle.on('click', (event) => {
  $(event.target).css("background-color", randomColor());
 })

// Adding article under section element.
$("section").append(newArticle)

  })
}); // END OF DOCUMENT READY DONT   GO FURTHER.

```

# Looping through an array 

```js
// Make array of blog titles
const listOfTitles = [
  "Title 1",
  "Super Title 2",
  "Return of the Super Title 3"
]

let counter = 0;


$(document).ready(() => {
//...

$('button').click(() => {
 
 
 const newArticle = $("<article>");
 const article = $("<h1>");
 const articleContent = $("<p>");

 articleContent.text("Listen again to the legends of the BIONICLE")

 // Title will be the array based on the index
 articleTitle.text(listOfTitles[counter])
 counter++

 newArticle.append(articleTitle)
 newArticle.append(articleContent)

 newArticle.on('click', (event) => {
  $(event.target).css("background-color", randomColor());
 })

  $("section").append(newArticle)

  })
}); // END OF DOCUMENT READY DONT GO FURTHER.

// Problem: If you run out of titles, no title will be shown. So you would have to hard code 10000's of titles in the array. 
```
# Using JSON Placeholder

A website with free fake API. 

https://jsonplaceholder.typicode.com/posts

```js
// An example of what you would get
[
  {
    "userId": 1,
    "id": 1,
    "title": "Random ass body",
    "body": "Random ass text"
  }
]
```

Instead of using local Array, we could use this data. 

```js
$(document).ready(() => {
 

$('button').click(() => {
 
 
 const newArticle = $("<article>");
 const article = $("<h1>");
 const articleContent = $("<p>");


// Use AJAX to GET data from this url. The data we fetch is now in 'response'

const random = Math.floor(Math.random() * 100); // -> Picks a random post to generate
$
  .ajax({ url:  `https://jsonplaceholder.typicode.com/posts/${random}`, method:"GET"})
  .then((response) => {

    // Now we dont have to hard-code these 2 
    articleContent.text(response.body)
    articleTitle.text(response.title)

    newArticle.append(articleTitle)
    newArticle.append(articleContent)

    newArticle.on('click', (event) => {
      $(event.target).css("background-color", randomColor());
    })

    $("section").append(newArticle)
  }
);



  });
}); // END OF DOCUMENT READY DONT GO FURTHER.
```

# What if Data is null?
```js
const someArticle = {
  title: "Hello",
  content: "I AM CONTENT",
  summary: null,
}

// Make the elements
const newArticle = $("<article>");
const articleTitle = $("<h1>");
const articleContent = $("<p>");

// Add text to the elements
articleTitle.text(someArticle.title);
articleContent.text(someArticle.content);

// Combine all the elements under article
newArticle.append(articleTitle);
newArticle.append(articleContent);

// If I know summary is sometimes null, I can put them in a if statement. Wont add summary if there is no summary. 
if(someArticle.summary) {
  const articleSummary = $("<p>");
  articleSummary.text(someArticle.summary);
  newArticle.append(articleSummary);
}

// If we wanted to add comments, we would just copy and paste above. Very EASY!
if(someArticle.comments) {
  const articleComments = $("<p>");
  articleComments.text(someArticle.comments);
  newArticle.append(articleComments);
}
  

newArticle.on("click", (event) => {
  $(event.target).css("background-color", randomColor());
});
```



# Refactor into One function
```js
$(document).ready(() => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };

  $("article").on("click", (event) => {
   
    console.log("YO YO YO");
    $(event.target).css("background-color", randomColor());
  });

  const createAnArticle = (content) => {
    const newArticle = $("<article>");
    const articleTitle = $("<h1>");
    const articleContent = $("<p>");

    articleContent.text(content.body);
    articleTitle.text(content.title);

    newArticle.append(articleTitle);
    newArticle.append(articleContent);

    newArticle.on("click", (event) => {
      console.log(event.target);
      $(event.target).css("background-color", randomColor());
    });

    return newArticle;
  };


  $("button").click(() => {
    const random = Math.floor(Math.random() * 100);
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/${random}`, method: "GET",
    }).then((response) => { // -> Article contents become response. 
      const newArticle = createAnArticle(response) // -> Putting the response info into the function.

      $("section").append(newArticle)
    });

  });
}); // END OF DOCUMENT READY DONT GO FURTHER.
```

# Make a tweet OBJ tips from Francis

1. Make an obj and see if it works with one local tweet

2. If it works, try to fetch an object remotely (If they have the same structure, it will work)


# Make multiple articles
```js
$(document).ready(() => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
  };

  $("article").on("click", (event) => {
   
    console.log("YO YO YO");
    $(event.target).css("background-color", randomColor());
  });

  const createAnArticle = (content) => {
    const newArticle = $("<article>");
    const articleTitle = $("<h1>");
    const articleContent = $("<p>");

    articleContent.text(content.body);
    articleTitle.text(content.title);

    newArticle.append(articleTitle);
    newArticle.append(articleContent);

    newArticle.on("click", (event) => {
      console.log(event.target);
      $(event.target).css("background-color", randomColor());
    });

    return newArticle;
  };
  // Function will get an array of API's and create multiple articles.
  // Just looping through the array, each iteration will go through the createAnArticle funtion.
  const createMultipleAritcles = (articles) => {
    for(const article of articles){
      const newArticle = createAnArticle(article)
      $("section").append(newArticle);
    }
  }


  $("button").click(() => {
    const random = Math.floor(Math.random() * 100);
    $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/`, 
      method: "GET",
    }).then((response) => { 
      createMultipleArticles(response);
    });

  });
}); // END OF DOCUMENT READY DONT GO FURTHER.
```

# Ajax Shortcut

```js
// Instead of 
 $.ajax({
      url: `https://jsonplaceholder.typicode.com/posts/`, 
      method: "GET",
    }).then((response) => { 
      createMultipleArticles(response);
    });

// Use this shortcut
$.get(`https://jsonplaceholder.typicode.com/posts/`).then((response) => { 
      createMultipleArticles(response);
    });