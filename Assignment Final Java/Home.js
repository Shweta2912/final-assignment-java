// Getting Section by there Ids usinG jquery
var clothingSection = $("#clothingCards");
var accessorySection = $("#accessoriesCards");

//Render product card using Jquery response pass from AJAX
function renderCard(data) {
  for (i = 0; i <= data.length; i++) {
    currentProduct = data[i];
    var cardTemplate = `<div class="card column" id="${currentProduct.id}">
    <a href="./products/Product_details.html?product_id=${i}">
      <div class="image">
      <img src="${currentProduct.preview}">
      </div>
      
      <div class="details">
        <h3>${currentProduct.name}</h3>
        <h4>${currentProduct.brand}</h4>
        <h5>${currentProduct.price}</h5>
      </div>
     </a> 
    </div>`;

    //Appending to different condition based on is accessory or not
    if (currentProduct.isAccessory === false) {
        //Appending or adding card inside the clothing section
        clothingSection.append(cardTemplate);
    } else {
        accessorySection.append(cardTemplate);
    }

  }
}
$('#cart-count').text(localStorage.getItem('count'));






//Jquery Api Calling
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (res) {
  // renderCard(res);
  renderCard(res);
});
