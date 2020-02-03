const flickerLetter = letter => 
  `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">
    ${letter}
  </span>`
const colorLetter = letter => 
  `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text.split('').map(flickerLetter).map(colorLetter).join('');
const neonGlory = t => 
  t.innerHTML = flickerAndColorText(t.textContent);
const targets = window.document.getElementsByClassName('neon')
console.log(targets)


for(var i=0 ; i<targets.length ; i++){
  neonGlory(targets[i]);
  targets[i].onclick = ({ target }) =>  neonGlory(target);
}

$(window).scroll(function(e){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.background').css('left',-(scrolled*0.15)+'px');
}