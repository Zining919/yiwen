//image slider
let slideIndex = [1, 1, 1, 1, 1, 1, 1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6","mySlides7"];

// Call showSlides for each slider
for (let i = 0; i < slideIndex.length; i++) {
    showSlides(1, i);
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

function wishlist() {
    alert("Added to Wishlist!");
  }

  function addToCart(){
    alert("Added Into Cart");
  }

  //quantity
function increment(num,item,index) {
    var count = parseInt(document.getElementById("count"+item).innerHTML);
    if(count == 10){
      count = 10;
    }
    else{
      count += num;
    }
    document.getElementById("count"+item).innerHTML = count;
    product[index].qty = count;
  }
  
  function decrement(num, item,index) {
    var count = parseInt(document.getElementById("count"+item).innerHTML);
    count -= num;
    if (count < 1) {
      count = 1;
    }
    document.getElementById("count"+item).innerHTML = count;
    product[index].qty = count; 
  }

  function toggleDescription(index) {
    var descriptions = document.getElementsByClassName("description");
    var description = descriptions[index];
    var moreText = description.querySelector(".more");
    var dots = description.querySelector(".dots");
    var btn = description.querySelector("button");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      btn.innerHTML = "Read less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      btn.innerHTML = "Read more";
    }
  }