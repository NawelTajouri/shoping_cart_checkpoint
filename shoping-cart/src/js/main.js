function open_window()

{
  const cartDOM = document.querySelector(".cart-overlay");
  if (cartDOM.style.visibility = "hidden") {
    cartDOM.style.visibility = "visible";
  }
  
}
function windowClose() 
{
  const cartDOM = document.querySelector(".cart-overlay");
  if (cartDOM.style.visibility = "visible") {
    cartDOM.style.visibility = "hidden";
  }
}

//plus button
var btnTag = document.getElementsByClassName("plus");
// console.log(btnTag);
// console.log(btnTag.length);
for (let j=0; j < btnTag.length; j++) {
    
    btnTag[j].addEventListener("click", increment);
    
    
    
}

function increment(event) {
    var btnplus = event.target;
    // console.log(btnplus);
    var divelmt = btnplus.parentElement;
    // console.log(divelmt);
    var quantityTag= divelmt.querySelector("span");
    var quantity = quantityTag.innerHTML;
    quantity++;
    quantityTag.innerHTML = quantity;
    var classPriceTag = divelmt.parentElement.parentElement.querySelector(".prod-caract");
    var unitPriceTag = classPriceTag.querySelector(".unitprice");
    var element = btnplus.parentElement.parentElement;
    var priceTag = element.querySelector("p");
    var totprice = priceTag.querySelector(".Price");
    var unitPrice = unitPriceTag.innerHTML;
    var price = totprice.innerHTML;
  // console.log(unitPrice);
    var myprice = (unitPrice * quantity);
    
    // console.log(price);
    // console.log(myprice);
    totprice.innerHTML = myprice ;
    // console.log(priceTag);
 
  
}

var checkTag =  document.getElementsByClassName("check");
for (let i=0 ;  i < checkTag.length; i++) {
  checkTag[i].addEventListener("click", Total) ;
}



function Total(e) {
   checkTag = e.target;
   var priceTot = checkTag.parentElement.querySelector("p")
   var priceTag = priceTot.querySelector(".Price");
   var price = Number(priceTag.innerHTML);
   var TotalTag = document.querySelector(".cart-footer");
   var TotalTagPrice = TotalTag.querySelector("h3");
   var PriceTotal = TotalTagPrice.querySelector(".cart-total");
  //  console.log(PriceTotal);
   var Total = Number(PriceTotal.innerHTML);
   var btnplus = checkTag.parentElement.querySelector(".plus");
   var btnMin = checkTag.parentElement.querySelector(".minus");
   var remove = checkTag.parentElement.querySelector(".remove-item");

   if(checkTag.checked == true) {
     Total += price ;
     btnplus.setAttribute("disabled", true);
     btnMin.setAttribute("disabled", true);
    remove.setAttribute("disabled", true);
    //  remove.value = 'Disable';
    //  console.log(remove);
   } else{
     Total -= price ;
     btnplus.removeAttribute("disabled");
     btnMin.removeAttribute("disabled");
     remove.removeAttribute("disabled");
   }
  
  
   PriceTotal.innerHTML = Total;
   
   
  
 }


// minus button

var btnTagMin = document.getElementsByClassName("minus");
for (let j=0; j < btnTagMin.length; j++) {
    
    btnTagMin[j].addEventListener("click", decrement);
    
    
    
}

function decrement(event) {
    var btnMin = event.target;
    // console.log(btnMin);
    var divelmt = btnMin.parentElement;
    // console.log(divelmt);
    var quantityTag= divelmt.querySelector("span");
    var quantity = quantityTag.innerHTML;
    if (quantity == 0) {
      quantity = 0 ;
    }else {
      quantity--;
    }
    quantityTag.innerHTML = quantity;
    // console.log(quantity);
   
    var classPriceTag = divelmt.parentElement.parentElement.querySelector(".prod-caract");
    var unitPriceTag = classPriceTag.querySelector(".unitprice");
    var element = btnMin.parentElement.parentElement;
    var priceTag = element.querySelector("p");
    var totprice = priceTag.querySelector(".Price");
    var unitPrice = unitPriceTag.innerHTML;
    var price = totprice.innerHTML;
  // console.log(unitPrice);
  if (price == 0) {
    price == 0;
  } else {
    price = price - unitPrice;
  }
 
    totprice.innerHTML = price ;
   

}

//add item to bag
var addTag = document.getElementsByClassName("bag-btn");
var cartItem = document.getElementsByClassName("cart-content");

const cartITEMNUMBER = document.querySelector(".cart-items");


for (let i=0; i<addTag.length; i++) {


    addTag[i].addEventListener("click",function addItem() {
      var k = [].indexOf.call(addTag, addTag[i]);
      
      if (i == k) {
        cartItem[k].style.opacity = 1;

        addTag[i].disabled = true;
        addTag[i].innerHTML = "Product in Bag";
        var numitem = Number(cartITEMNUMBER.innerHTML) ;
        // console.log(numitem);
        numitem = Number(numitem + 1);
        cartITEMNUMBER.innerHTML = Number(numitem);
        

        }else{

        cartItem[k].style.opacity = 0;

      }
      

        });

    }


//like-button

        
var likeItem = document.getElementsByClassName("like-btn");
for (let j=0; j<likeItem.length; j++){
  likeItem[j].addEventListener("click", function() {
    
    likeItem[j].style.color = "#ff0000";
});
}

//delete button

var removeItem = document.getElementsByClassName("remove-item");

var trashTag = document.getElementsByClassName("cart-item");

for (let j=0; j<removeItem.length; j++) {

  removeItem[j].addEventListener("click", function remove(){
    var k = [].indexOf.call(removeItem, removeItem[j]);
    
    if(j == k){
      trashTag[k].style.visibility = "hidden" ;
      var h = cartITEMNUMBER.innerHTML;
      // console.log(h);
      h= h-1;
      cartITEMNUMBER.innerHTML = h;
      // console.log(h);
      addTag[k].disabled = false;
      addTag[k].innerHTML = "add to bag";


  }
  })
}

//clear cart

function Clear_cart()

{

  var Mycart = document.querySelector(".My_items");
  var PriceTotal = document.querySelector(".cart-total");
  const cartITEMNUMBER = document.querySelector(".cart-items");
  var addTag = document.querySelector(".bag-btn");
  Mycart.style.opacity = 0;
  var totalVal = PriceTotal.innerHTML;
  totalVal = 0;
  PriceTotal.innerHTML = totalVal;
  var itemVal = cartITEMNUMBER.innerHTML;
  itemVal = 0;
  cartITEMNUMBER.innerHTML = itemVal;
  addTag.innerHTML = "add to bag";
  
  
}