// --------------------------MENU-------------------------------------

let menu = document.querySelectorAll(".menu");
let menus = 0;

function tabMenu() {
  for (menus of menu) {
    menus.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
}

// ------------------------CONTROLPAY----------------------------------

let counts = document.querySelectorAll("#count");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let pays = document.querySelectorAll("#pay");
let discount = document.querySelector(".disc");
let plusPay = 125.0;
let discPay = 250.0;
let start = 1;

let pay = 0
let count = 0

plus.onclick = () => {
  start++;
  plusPay += 125.0;
  discPay += 250.0;

  for(pay of pays){
    pay.innerHTML = "$" + plusPay + ".00";
  }
  for(count of counts){
    count.innerHTML = "x" + start;
  }
  discount.innerHTML = "$" + discPay + ".00";
};
minus.onclick = () => {
  if (start < 2) {
    plusPay -= 0;
    discPay -= 0;
    start -= 0;
    for(pay of pays){
      pay.innerHTML = "$" + plusPay + ".00";
    }
    for(count of counts){
      count.innerHTML = "x" + start;
    }
    discount.innerHTML = "$" + discPay + ".00";
  } else {
    plusPay -= 125.0;
    discPay -= 250.0;
    start--;
    for(pay of pays){
      pay.innerHTML = "$" + plusPay + ".00";
    }
    for(count of counts){
      count.innerHTML = "x" + start;
    }
    discount.innerHTML = "$" + discPay + ".00";
  }
};

// ----------------------------CONTROLIMAGE------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let close = document.getElementById("close");
  let containerShowImg = document.querySelector(".container-show-img");
  let handleShowImage = document.querySelectorAll("#handleShowImage");
  let showImage = document.querySelector(".showImage")
  handleShowImage.forEach((link) => {
    link.addEventListener("click", () => {
      containerShowImg.style.display = "flex";
      showImage.style.display = "flex";
    });
  });
  close.onclick = function () {
    containerShowImg.style.display = "none";
  };
});

// ------------------------CAROUSEL------------------------------------

let boxImg = document.querySelectorAll(".box-img");
let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");
// let countScroll = dcument.querySelector(".count-scroll")
let boxImg2 = 0
let next2 = 0
let prev2 = 0

for(boxImg2 of boxImg){
  boxImg2.addEventListener("wheel", (event) => {
    event.preventDefault();
    
    boxImg2.scrollLeft += event.deltaY;
    boxImg2.style.scrollBehavior = "auto";
  });
}

for(next2 of next){
  next2.addEventListener("click", () => {
    for(boxImg2 of boxImg){
      boxImg2.style.scrollBehavior = "smooth";
      boxImg2.scrollLeft += 397;
    }
  });
}
for(prev2 of prev){
  prev2.addEventListener("click", () => {
    for(boxImg2 of boxImg){
      boxImg2.style.scrollBehavior = "smooth";
      boxImg2.scrollLeft -= 397;
    }
  });
}


// ----------------------------BOXCHECKOUT--------------------------------
let boxCheckout = document.querySelector(".box-checkout")

function PurchaseBox(){
  boxCheckout.classList.toggle("display-setings")
}

// ----------------------------HANDLETOCART------------------------------
let animation = document.querySelector(".animation")
let wraper1 = document.querySelector(".wraper-1")
let wraper2 = document.querySelector(".wraper-2")

// ADD PRODUCT
function addToCart(){
  animation.classList.toggle("show-animation")
  wraper1.classList.add("display-setings")
  wraper2.style.visibility = "hidden"
}

// HIDE PRODUCT

function hideProduct(){
  wraper1.classList.remove("display-setings")
  wraper2.style.visibility = "visible"
}

// ---------------------------MENU----------------------------------
let container = document.querySelector(".container")
let boxMenu = document.querySelector(".box-menu")

document.getElementById("showMenu").onclick = () => {
  boxMenu.classList.add("animation-box")
  container.classList.add("blurr")
}

document.querySelector(".hideMenu").onclick = () => {
  container.classList.remove("blurr")
  boxMenu.classList.remove("animation-box")
}