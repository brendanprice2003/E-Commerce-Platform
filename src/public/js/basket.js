
const log = console.log.bind(console);
const localStorage = window.localStorage;
const user = JSON.parse(localStorage.getItem('user'));
let checkoutDat = {
    items: {},
    user: {},
    cheque: {
        total: 0,
        subtotal: 0,
        vat: 0,
        shipping: 'Free'
    }
};

// check for signed-in user
if (user) {
    document.getElementById('nouser').style.display = 'none';
    document.getElementById('user').innerHTML = `Hello ${user.username}`;
    checkoutDat.user = user;
};

// get basket items
const basket = JSON.parse(localStorage.getItem('basket'));
if (!Object.keys(basket).length) {
    document.getElementsByClassName('checkoutcon')[0].style.display = 'none';
    document.getElementById('noitems').style.display = 'block';
};

// loop over items in basket
for (let index in basket) {
    
    let item = basket[index];

    // create element for each item
    let con = document.createElement('div');
    let attrName = document.createElement('div');
    let attrDesc = document.createElement('div');
    let subjectCon = document.createElement('div');
    let attrPrice = document.createElement('div');
    let attrQuant = document.createElement('div');
    let removeBtn = document.createElement('div');

    // field and tag properties
    con.className = 'itemcon';
    attrName.className = 'itemname';
    attrDesc.className = 'itemdesc';
    subjectCon.className = 'subjectCon';
    attrPrice.className = 'itemprice';
    attrQuant.className = 'itemquant';
    removeBtn.className = 'removebtn';
    
    attrName.innerHTML = item.name;
    attrDesc.innerHTML = item.description;
    attrPrice.innerHTML = item.price;
    attrQuant.innerHTML = 1;
    removeBtn.innerHTML = 'Remove';

    // remove btn logic
    removeBtn.addEventListener('click', function () {
        
        // style
        this.style.backgroundColor = '#562a27';
        setInterval(() => {this.style.backgroundColor = '#ad413b';}, 50);

        // logic
        removeItem(item);
    });

    // build hiearchy and push to dom
    subjectCon.append(attrPrice, attrQuant);
    con.append(attrName, attrDesc, subjectCon, removeBtn);
    document.getElementById('basketItems').appendChild(con);
};

// remove item from basket
function removeItem(product) {

    let basket = JSON.parse(localStorage.getItem('basket'));
    for (let index in basket) {

        let item = basket[index];

        // remove item from array
        if (item.product_id === product.product_id) {
            delete basket[product.product_id];
        };

        // save basket again
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    // refresh page (bandaid fix lol)
    location.reload();
};

// do checkout fields
function doCheckoutFields() {

    const basket = JSON.parse(localStorage.getItem('basket'));
    let subtotal = 0;
    let vat = 1.20;
    let total = 0;

    // find subtotal price of all items
    for (let index in basket) {
        let item = basket[index];
        subtotal += item.price; // increment subtotal
        checkoutDat.items[item.product_id] = item; // store item
    };

    // math and format fields
    total = subtotal * vat;
    total = parseFloat(total).toFixed(2); // only allow 2 decimal places
    vat = (100 * vat) - 100; // convert vat to hard % value

    // store fields
    checkoutDat.cheque.total = parseFloat(total);
    checkoutDat.cheque.subtotal = parseFloat(subtotal);
    checkoutDat.cheque.vat = parseFloat(vat);
    
    // fields
    document.getElementById('attrSubtotal').innerHTML = `Subtotal: $${subtotal}`;
    document.getElementById('attrShipping').innerHTML = 'Shipping: FREE';
    document.getElementById('attrVat').innerHTML = `VAT: ${vat}%`;
    document.getElementById('attrTotal').innerHTML = `Total: $${total}`;
};
doCheckoutFields();


// do checkout process
function doCheckoutProcess() {

    log(checkoutDat);
    document.getElementById('checkoutwindowBg').style.display = 'flex';
    for (let index in checkoutDat.items) {

        let item = checkoutDat.items[index];
        
        // create elements
        let con = document.createElement('div');
        let itemName = document.createElement('div');
        let itemPrice = document.createElement('div');

        // styles and fields
        con.className = 'con'
        itemName.style.fontSize = '14px';
        itemName.style.fontStyle = 'italic';

        itemName.innerHTML = `${item.name} (x1)`;
        itemPrice.innerHTML = `$${item.price}`;

        // hierarchy
        con.append(itemName, itemPrice);
        document.getElementById('checkoutitems').appendChild(con);
    };

    // add total in checkout window
    document.getElementById('checkouttotal').innerHTML = `Total: $${checkoutDat.cheque.total} <span style="font-size: 12px;">VAT incl.</span>`;

    // add purchase to database
    // clear basket and redirect back to homepage
};

document.getElementById('checkout').addEventListener('click', () => {
    doCheckoutProcess();
});