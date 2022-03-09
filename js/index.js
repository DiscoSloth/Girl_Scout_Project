window.onload=function() {

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  var heart_button_1 = document.getElementById('heart-button-1');
  var heart_button_2 = document.getElementById('heart-button-2');
  var heart_button_3 = document.getElementById('heart-button-3');
  var heart_button_4 = document.getElementById('heart-button-4');
  var heart_button_5 = document.getElementById('heart-button-5');
  let counter_1 = document.getElementById('counter-1');
  let counter_2 = document.getElementById('counter-2');
  let counter_3 = document.getElementById('counter-3');
  let counter_4 = document.getElementById('counter-4');
  let counter_5 = document.getElementById('counter-5');

heart_button_1.addEventListener("click", function() {

let count = counter_1.innerHTML;
count = Number(count)+1;
console.log(count);
counter_1.innerHTML=count;
});

heart_button_2.addEventListener("click", function() {

  let count = counter_2.innerHTML;
  count = Number(count)+1;
  console.log(count);
  counter_2.innerHTML=count;
  });

heart_button_3.addEventListener("click", function() {

let count = counter_3.innerHTML;
count = Number(count)+1;
console.log(count);
counter_3.innerHTML=count;
});

heart_button_4.addEventListener("click", function() {

  let count = counter_4.innerHTML;
  count = Number(count)+1;
  console.log(count);
  counter_4.innerHTML=count;
  });
  heart_button_5.addEventListener("click", function() {

    let count = counter_5.innerHTML;
    count = Number(count)+1;
    console.log(count);
    counter_5.innerHTML=count;
    });



}
