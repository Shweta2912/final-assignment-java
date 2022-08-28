
 // ---------------- Insert Data into Local Storage > OnClick > Add To Cart Button -------

 var addToCartBtn = document.getElementById("add-to-cart");
 var cart = document.getElementById("cart-count");
 var myCartData = [];
 var cartIntialValue;


 // ---------------- Add Data into List and then into Local Storage -----------------------
 
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
       id: productData.id,
       title: productData.name,
       count: 1,
       price: productData.price,
       preview: productData.preview
     };
     myCartData.push(myObj);
   }
   // If List Is Not Empty Then
   else if (myCartData.length != 0) {
     var w = 0;
     // If Same Product Data == True Then List.Count++
     for (var i = 0; i < myCartData.length; i++) {
       if (myCartData[i].id == productData.id) {
         myCartData[i].count = parseInt(myCartData[i].count) + 1;
         w += 1;
       }
     }
     // Else Add New Data Into List
     if (w == 0) {
       var myObj = {
         id: productData.id,
         title: productData.name,
         count: 1,
         price: productData.price,
         preview: productData.preview
       };
       myCartData.push(myObj);
     }
   }
   // Store The List Into Local Storage
   window.localStorage.setItem("product-list", JSON.stringify(myCartData));
 }
 
 //------ Add-To-Cart-Btn Click Event Listner ------------------------
 
 addToCartBtn.addEventListener("click", function() {
   var productId = window.location.search.split("=")[1];
   var urlLink =
     "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + productId;
 
   function getDataForLocalStorage() {
     var http = new XMLHttpRequest();
     http.onreadystatechange = function() {
       if (this.readyState === 4) {
         if (this.status === 200) {
           var productData = JSON.parse(this.responseText);
           addDataIntoList(productData);
         }
       }
     };
     http.open("GET", urlLink, true);
     http.send();
   }
   cartCount();
   getDataForLocalStorage();
 }); 



 /// add to cart functionaloity
  // function addToCartArray() {
  //   currentProduct = productData[i];
  //   const myObj = JSON.stringify(currentProduct);
  //   //console.log(myObj);
     
  //   if (localStorage.getItem('cartArray') === null) {
  //     localStorage.setItem('cartArray', myObj);
  //   }
    
  // }


  
  function addDataIntoList(productData) {
    if (myCartData.length === 0) {
      myCartData = JSON.parse(window.localStorage.getItem("product-list")); 
      for (var m = 0; m <= myCartData.length; m++){
        if (myCartData[m].id == productData[urlId].id) {
          myObj.count = count + 1;
          myCartData.push(myObj.count);
        } else {
          myNewObj = {
            id: productData[m].id,
            title: productData[m].name,
            count: 1,
            price: productData[m].price,
            preview: productData[m].preview
          }
          myCartData.push(myNewObj);
        }
      } 
    } else {
      var myObj = {
        id: productData[urlId].id,
        title: productData[urlId].name,
        count: 1,
        price: productData[urlId].price,
        preview: productData[urlId].preview
      }
      myCartData.push(myObj);
    }
    // Store The List Into Local Storage
    window.localStorage.setItem("product-list", JSON.stringify(myCartData)); 
}






for (m = 0; m < myCartData.length; m++) {
  //console.log(myCartData[m].id);
  if (myCartData[m].id == productData[urlId].id) {
    myCartData[m].count += 1;
    myObj = {
      id: myCartData[m].id,
      title: myCartData[m].name,
      count: myCartData[m].count,
      price: myCartData[m].price,
      preview: myCartData[m].preview
    }
    myCartData.push(myObj)
    window.localStorage.setItem("product-list", JSON.stringify(myCartData));
  } else if (myCartData.length == 0) {
    myObj = {
      id: myCartData[m].id,
      title: myCartData[m].name,
      count: 1,
      price: myCartData[m].price,
      preview: myCartData[m].preview
    }
    myCartData.push(myObj)
    window.localStorage.setItem("product-list", JSON.stringify(myCartData));
  }
}


function addDataIntoList(productData) {
  if (window.localStorage.getItem("product-list") === null) {
    myCartData = [];
  }
  // If Local Storage Is Not Empty Then Set List To Value Of Local Storage
  else {
    myCartData = JSON.parse(window.localStorage.getItem("product-list"));
  }
}
