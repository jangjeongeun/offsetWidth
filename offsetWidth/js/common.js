window.onload = function() {
  document.getElementById("scrollTop").onclick = function(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }
}

const imageContainer = document.getElementById("image-container");
const image = document.getElementById("image");

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;

  var image = document.getElementById('image');
  var maxScroll = document.body.scrollHeight - window.innerHeight; 
  var scrollPercent = window.scrollY / maxScroll;
  var newWidth = (10 + scrollPercent * 90) + "%";
  image.style.width = newWidth;

});