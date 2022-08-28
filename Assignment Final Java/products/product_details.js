var productCard = $('#product');


const searchString= window.location.search;// gives the value after question mark
const params = new URLSearchParams(searchString);// extracts product id value

var urlId = params.get('product_id');// should be able to get id from url

function renderProduct(productData,urlId) {
  clickedProduct = productData; // pass her clicked value or id
  //console.log(clickedProduct[urlId].id);
  var productTemplate = `
    <div class="left-side">
    <img src="${clickedProduct[urlId].preview}" id="productImg">
    </div>
    <div class="right-side">
        <div class="product-description">
            <h1 id="name">${clickedProduct[urlId].name}</h1>
            <h4 id="brand">${clickedProduct[urlId].brand}</h4>
            <h3>Price:Rs <span id="price">${clickedProduct[urlId].price}</span></h3>
            <div class="description">Description
            <p id="description">${clickedProduct[urlId].description}</p>
        </div>
        <div class="product-preview">
            <h3>Product Preview</h3>
            <div class="previewImg">
            </div>
        </div>
    </div>
    <div class="btn">
    <button id="add-to-cart">Add to Cart</button>
    </div></div>
    `
  productCard.append(productTemplate);
  var previewImageDiv = $('.previewImg');

  for (i = 0; i < clickedProduct[urlId].photos.length; i++) {
    var previewImageRender = `<img id="img${i}" src="${clickedProduct[urlId].photos[i]}"> `
    previewImageDiv.append(previewImageRender);

  }
 

  
  var addTocart = $("#add-to-cart");

  

  // To set the cart-count value in local storage

  if(localStorage.getItem('count') === null) {
    localStorage.setItem('count',0);
  } else {
    var cartValue = localStorage.getItem('count');// number of items in cart 
    localStorage.setItem('count', cartValue);
  }

  function cartCount() {
    if (localStorage.getItem('count') === null) {
      cartIntialValue = 0;
    } else {
      cartIntialValue = JSON.parse(window.localStorage.getItem("count"));
      $('#cart-count').text(cartIntialValue);
      
    }
    var cartCurrentValue = cartIntialValue + 1;
    window.localStorage.setItem("count",cartCurrentValue);
    $('#cart-count').text(cartCurrentValue);
  }
  // To set value which is in local storage using jquery 
  $('#cart-count').text(localStorage.getItem('count'));

 

  function addDataIntoList(productData) {

    // If Local Storage Is Empty Then Set List To Empty
  if (window.localStorage.getItem("product-list") === null) {
    myCartData = [];
  }
  // If Local Storage Is Not Empty Then Set List To Value Of Local Storage
  else {
    myCartData = JSON.parse(window.localStorage.getItem("product-list"));
  }
 // If List Is Empty Then Push The Object In It
 if (myCartData.length === 0) {
  var myObj = {
    id: productData[urlId].id,
    title: productData[urlId].name,
    count: 1,
    price: productData[urlId].price,
    preview: productData[urlId].preview
  };
  myCartData.push(myObj);
}
// If List Is Not Empty Then
else if (myCartData.length != 0) {
  var w = 0;
  // If Same Product Data == True Then List.Count++
  for (var i = 0; i < myCartData.length; i++) {
    if (myCartData[i].id == productData[urlId].id) {
      myCartData[i].count = parseInt(myCartData[i].count) + 1;
      w += 1;
    }
  }
  // Else Add New Data Into List
  if (w == 0) {
    var myObj = {
      id: productData[urlId].id,
      title: productData[urlId].name,
      count: 1,
      price: productData[urlId].price,
      preview: productData[urlId].preview
    };
    myCartData.push(myObj);
  }
}
// Store The List Into Local Storage
window.localStorage.setItem("product-list", JSON.stringify(myCartData));
}
  

  function cartHandler() {
    cartCount();
    addDataIntoList(productData);
  }


//adding click usig jquery and handler
addTocart.on("click", cartHandler);

 


  var activePreview = document.getElementById('img0');
  activePreview.classList.add('active');

  function clicked(num) {
    var x = document.querySelectorAll('.previewImg img');
    for (k = 0; k < clickedProduct[urlId].photos.length ; k++) {
      if (x[k].classList.contains('active')) {
        x[k].classList.remove('active');
      } else {
        x[num].classList.add('active');
      }
    }
  }

  var productImage = document.getElementById('productImg');
  var photo1 = document.getElementById('img0');
  var photo2 = document.getElementById('img1');
  var photo3 = document.getElementById('img2');
  var photo4 = document.getElementById('img3');
  var photo5 = document.getElementById('img4');

  photo1.addEventListener("click", function () {
    productImage.src = photo1.src;
    clicked(0);
  });
  photo2.addEventListener("click", function () {
    productImage.src = photo2.src;
    clicked(1);
  });
  photo3.addEventListener("click", function () {
    productImage.src = photo3.src;
    clicked(2);
  });
  photo4.addEventListener("click", function () {
    productImage.src = photo4.src;
    clicked(3);
  });
  photo5.addEventListener("click", function () {
    productImage.src = photo5.src;
    clicked(4);
  });

  
}


//Jquery Api Calling
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (res) {
  renderProduct(res, urlId);
});




 