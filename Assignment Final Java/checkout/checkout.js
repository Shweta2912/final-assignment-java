var cartSection = $('#cart');
var totalCost = 0;
//var placeOrderBtn = $('#place-order');
var placeOrder = document.getElementById("place-order");

var myLocalStorageData = JSON.parse(window.localStorage.getItem("product-list"));
console.log(myLocalStorageData);// array
for (var j = 0; j < myLocalStorageData.length; j++){
  subTotal = myLocalStorageData[j].count * myLocalStorageData[j].price;
  totalCost = subTotal + totalCost;
}

var checkoutTemplate = `
<h1>Checkout</h1>
<div class="cart-container">
  <div class="left-side">
    <p>Total Items: <span id="number-of-item">${myLocalStorageData.length}</span></p>
    <div class="cart-items" id="cart-item-container">
    </div>
  </div>
  <div class="right-side">
    <div class="total-amount">
      <h2>Total Amount</h2>
      <p>Total Amount: Rs <span id="total-amount">${totalCost}</span></p>
      <a href="../orderSucess/order_success.html">
        <button id="place-order" >Place Order</button>
      </a>
    </div>
  </div>
</div>
`;
cartSection.append(checkoutTemplate);
var cartItemContainer = $('#cart-item-container');

for (var i = 0; i < myLocalStorageData.length; i++){
  var itemTemplate = `
      <div class="item">
        <img src="${myLocalStorageData[i].preview}"/>
        <div class="detail">
            <h3>${myLocalStorageData[i].title}</h3>
            <p>x${myLocalStorageData[i].count}</p>
            <p>Amount:${subTotal}</p>
        </div>
      </div>
`;
  cartItemContainer.append(itemTemplate);
}
$('#cart-count').text(localStorage.getItem('count'));



// placeOrderBtn.on('click', orderPlaceHandler)

// function orderPlaceHandler() {
//   console.log('clicked')
//   // window.localStorage.removeItem("product-list");
//   // window.localStorage.setItem("cart-count", "0");
//   // $post('https://5d76bf96515d1a0014085cf9.mockapi.io/order', function (myLocalStorageData) {
//   //   console.log('sucesss');
//   //   return myLocalStorageData;
//   // });
  
// }

var placeOrder = document.getElementById("place-order");

placeOrder.addEventListener("click", function() {
  myLocalStorageData = window.localStorage.removeItem("product-list");
  cartC = window.localStorage.setItem("count", "0");
  var cost = 0;
  for (var i = 0; i < myLocalStorageData.length; i++) {
    counter += myLocalStorageData[i].count;
  }
  totalAmount.innerHTML = cost;
  numberOfItem.innerHTML = counter;
});