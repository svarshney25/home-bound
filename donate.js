//var submitBtn = $(".submit-btn");
//var message = $(".message");

//submitBtn.addEventListener("click", sendMessage);

//function sendMessage() {
 // var nameInput = $('#name-input').val()
  //message.text(`Welcome to the Home Bound Community,${nameInput}! We're so happy you joined us today. Your contribution is greatly appreciated!`)
//}

//let dollars = document.querySelector('#dollars')

//dollars.addEventLister('click', () ==> dollars.style.backgroundColor='#535E4B')

const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = '#535E4B';
  btn.style.color = 'white';
});

const btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function onClick() {
  btn5.style.backgroundColor = '#535E4B';
  btn5.style.color = 'white';
});

const btn20 = document.getElementById('btn20');

btn20.addEventListener('click', function onClick() {
  btn20.style.backgroundColor = '#535E4B';
  btn20.style.color = 'white';
});

const btn50 = document.getElementById('btn50');

btn50.addEventListener('click', function onClick() {
  btn50.style.backgroundColor = '#535E4B';
  btn50.style.color = 'white';
});

const btnCust = document.getElementById('btnCust');

btnCust.addEventListener('click', function onClick() {
  btnCust.style.backgroundColor = '#535E4B';
  btnCust.style.color = 'white';
});

function clickCust() {
  var text = document.getElementById("popup");
  text.classList.toggle("hide");
  text.classList.toggle("show");
}