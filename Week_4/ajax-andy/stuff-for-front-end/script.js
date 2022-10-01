// All of our manupulation with JQuery happens here

$(() => { // Beginning of doc ready

    // This is the container in html to put all of our data in. Grabbed by ID
    const $container = $('#container');


  // Making an AJAX request to GET data from a URL.
  // In this case, our URL is '/donuts': -> Shorter way for relative links
  const fetchDonuts = () => {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:54321/donuts',
      success: (data) => {
        console.log(data);
        $container.empty() // -> clearing our whiteboard
        
        for (const donut of data) { // -> Render Arr of donuts
          const $donut = renderDonut(donut);
          
          $container.prepend($donut);  // -> Append donuts under container in html
        }
      }
    }); 
  };

  // Fetch our already made donuts
  fetchDonuts();

  // Create the render for the DOM and return it
  // Notice class="donut". We can add CSS to that class in css file.
  const renderDonut = (donut) => {
    const $donut = $(`
      <div class="donut">                 
        <h2>Name: ${donut.name}</h2>
        <h3>Filling: ${donut.filling}</h2>
        <h3>Flavour: ${donut.flavour}</h3>
        <h3>Sprinkles: ${donut.sprinkles ? '✅' : '❌'}</h3>
      </div>
    `)

    return $donut;
  };

  // Grab the new-donut form
  const $form = $('#new-donut');

  $form.on('submit', (event) => {  // -> do function when submit button is pressed under this form
    event.preventDefault();        // -> prevents submit button doing its default settings

    const serializedData = $form.serialize(); // -> converts the inputed data into a serilized string data
    console.log(serializedData);

    // Send serialized Data to our /donuts route
    $.post('/donuts', serializedData, (response) => {
      console.log(response);
    });

    // Since we created new donuts, we need to fetch donuts again
    fetchDonuts();
  });

}); // End of doc.ready