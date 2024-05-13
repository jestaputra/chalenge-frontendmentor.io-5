let nameCard = document.getElementById("name");
let date = document.getElementById("date");
let number = document.getElementById("number");
let digits = document.getElementById("digits");
let nameInput = document.getElementById("nameInput");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let digitInput = document.getElementById("digitsInput");
let numberInput = document.getElementById("numberInput");
let massage = document.getElementById("massage");

function getDetail() {
  let now = new Date();

  if (numberInput.value.length < 16) {
    numberInput.classList.add("wrong");
    massage.innerHTML = "*Please check your input again";
    massage.style.color = "red";
    setTimeout(() => {
      numberInput.classList.remove("wrong");
      massage.innerHTML = "";
    }, 3000);
  } else {
    numberInput.classList.remove("wrong");
    number.innerHTML = numberInput.value;
  }
  if (month.value > 12 || year.value < now.getFullYear()) {
      month.className = "wrong";
      year.className = "wrong";
      massage.innerHTML = "*Please check your input again";
      massage.style.color = "red";
      setTimeout(() => {
          month.className = "";
          year.className = "";
          massage.innerHTML = "";
        }, 3000);
    }else {
        month.className = "";
        year.className = "";
        date.innerHTML = `${month.value}/${year.value}`;
    }
    if(month.value < 10){
      date.innerText = `0${month.value}/${year.value}`
    }else{
      date.innerText = `${month.value}/${year.value}`
    }
  if (digitInput.value.length == 3) {
    digits.innerHTML = digitInput.value;
    digitInput.classList.remove("wrong");
  } else {
    digitInput.classList.add("wrong");
    massage.innerHTML = "*Please check your input again";
    massage.style.color = "red";
    setTimeout(() => {
      digitInput.classList.remove("wrong");
      massage.innerHTML = "";
    }, 3000);
  }
  if (nameInput.value.length < 8) {
    nameInput.classList.add("wrong");
    massage.innerHTML = "*Please check your input again";
    massage.style.color = "red";
    setTimeout(() => {
      nameInput.classList.remove("wrong");
      massage.innerHTML = "";
    }, 3000);
  } else {
    nameCard.innerHTML = nameInput.value;
    nameInput.classList.remove("wrong");
  }
}
