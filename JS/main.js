// Theme switcher
let isWhite = true;

function black() {
  const bodyTheme = document.body;
  bodyTheme.classList.toggle("dark-mode");
  if (isWhite == true) {
    document.querySelector(".grid-container > div").style.backgroundColor = "pink";
    isWhite = false
  } else {
    document.querySelector(".grid-container > div").style.backgroundColor = "white";
    isWhite = true
  }
};


