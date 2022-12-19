document.addEventListener("DOMContentLoaded", function(){console.log('loaded') });

console.log(5 + 6);

MicroModal.init({
    disableScroll: true
  });
    
console.log("yo");
// find element for event to be on
var cardsBackground = document.querySelector(".cards");
var cards = document.querySelectorAll(".card");
var backgroundImages = ["/runeroom/assets/img/bg1.jpg/", "/runeroom/assets/img/bg2.jpg", "/runeroom/assets/img/bg3.jpg", "/runeroom/assets/img/bg4.jpg", "/runeroom/assets/img/bg5.jpg", "/runeroom/assets/img/bg8.jpg", "/runeroom/assets/img/bg6.jpg", "/runeroom/assets/img/bg7.jpg", "/runeroom/assets/img/bg9.jpg", "/runeroom/assets/img/bg10.jpg"];
// add event listener with Math random loop
cards.forEach(card => {
  card.addEventListener('click', function() {
    var randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    cardsBackground.style.backgroundImage = `url(${randomImage})`;
    
  console.log("6+9") ;
  });
});
