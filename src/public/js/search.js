
// check for signed in user
let localStorage = window.localStorage;
let user = JSON.parse(localStorage.getItem('user'));
const log = console.log.bind(console);

if (user) {
  document.getElementById('nouser').style.display = 'none';
  document.getElementById('user').innerHTML = `Hello ${user.username}`;
};

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
    });
};

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
  };

  // Loop through the results and create HTML elements to display them
  data.forEach(product => {
    
    // create elements
    let con = document.createElement('div');
    let attrName = document.createElement('div');
    let attrDesc = document.createElement('div');
    let subjectCon = document.createElement('div');
    let attrPrice = document.createElement('div');
    let attrQuant = document.createElement('div');
    let addBtn = document.createElement('div');

    // field and tag properties
    con.className = 'con';
    attrName.className = 'productname';
    attrDesc.className = 'productdesc';
    subjectCon.className = 'subjectCon';
    attrPrice.className = 'productprice';
    attrQuant.className = 'productquant';
    addBtn.className = 'addtobasketBtn';

    attrName.innerHTML = product.name;
    attrDesc.innerHTML = product.description;
    attrPrice.innerHTML = `Price: $${product.price}`;
    attrQuant.innerHTML = `Quantity: ${product.quantity}`;
    addBtn.innerHTML = 'Add to basket';

    // add to basket button logic
    addBtn.addEventListener('click', () => {
      AddBasket(product);
    });

    // hierarchy
    subjectCon.append(attrPrice, attrQuant);
    con.append(attrName, attrDesc, subjectCon, addBtn);
    resultsContainer.appendChild(con);
  });

  window.addEventListener("resize", matchHeightsDelay);

  window.addEventListener('load', (event) => {
    matchHeightsDelay();
  });
  matchHeightsDelay();
};

// add item to basket
function AddBasket(product) {

  // Handle adding the product to the basket
  console.log(product);

  // using local storage here again because it would suffice for this purpose
  let localStorage = window.localStorage;
  let basket = JSON.parse(localStorage.getItem('basket'));

  // wildcard
  if (basket === null) {
    basket = {};
  };

  // add item
  basket[product.product_id] = product;
  localStorage.setItem('basket', JSON.stringify(basket));
};

// Call the search function on page load
search();



function matchHeightsDelay() {
  setTimeout(matchHeights("resultsContainer"), 10);
};


function matchHeights(Parent) {

  let TallestDivHeight = 0;
  let children = Array.prototype.slice.call(document.getElementById(Parent).children);

  children.forEach((element) => {
    element.style.height = "auto";
  });

  children.forEach((element) => {
    if (element.offsetHeight > TallestDivHeight) {
      TallestDivHeight = element.offsetHeight;
    };
  });

  children.forEach((element) => {
    element.style.height = TallestDivHeight + "px";
  });
};