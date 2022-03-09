/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  var heart_button = document.getElementById("heart-button");
heart_button.addEventListener('click', function() {
let counter_value = document.querySelector(".counter");
let count = counter_value.innerHTML;
counter = Number(count)+1;
console.log(counter);
counter_value.innerHTML=counter;
});
