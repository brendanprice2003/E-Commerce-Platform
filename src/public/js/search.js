
function search() {
    // Get the search query from the URL parameter
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchQuery = urlParams.get('query');

    // Make a GET request to the backend API
    fetch(`/search?query=${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(data => {
        // Handle the received data
        displayResults(data);
        })
        .catch(error => {
        console.error(error);
        // Handle the error case
    });
}

function displayResults(data) {
    const resultsContainer = document.getElementById('resultsContainer');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Check if there are no results
    if (data.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No results found.';
        resultsContainer.appendChild(noResultsMessage);
        return;
    }

    // Loop through the results and create HTML elements to display them
    data.forEach(product => {
        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        const productId = document.createElement('p');
        productId.textContent = `ID: ${product.product_id}`;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${product.price}`;

        const productQuantity = document.createElement('p');
        productQuantity.textContent = `Quantity: ${product.quantity}`;

        const addButton = document.createElement('button');
        addButton.textContent = `Add to Basket`;
        addButton.onclick=`AddBasket(${product.product_id})`;
        addButton.onclick = () => AddBasket(product.product_id);

        productContainer.appendChild(productName);
        productContainer.appendChild(productDescription);
        productContainer.appendChild(productPrice);
        productContainer.appendChild(productQuantity);
        // productContainer.appendChild(productId);
        productContainer.appendChild(addButton);

        resultsContainer.appendChild(productContainer);
    });

    window.addEventListener("resize", matchHeightsDelay);
    
    
    window.addEventListener('load', (event) => {
        matchHeightsDelay();
    });
    matchHeightsDelay();
}
  
function AddBasket(productId) {
    // Handle adding the product to the basket
    console.log(`Adding product with ID ${productId} to the basket...`);
}

// Call the search function on page load
search();



function matchHeightsDelay(){
    setTimeout(matchHeights("resultsContainer"), 10);
}
  

function matchHeights(Parent) {
    let TallestDivHeight = 0,
      children = Array.prototype.slice.call(document.getElementById(Parent).children);
  
    children.forEach((element) => {
      element.style.height = "auto";
    });
  
    children.forEach((element) => {
      if (element.offsetHeight > TallestDivHeight) {
        TallestDivHeight = element.offsetHeight;
      }
    });
  
    children.forEach((element) => {
      element.style.height = TallestDivHeight + "px";
    });
  }
  