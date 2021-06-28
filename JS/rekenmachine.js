//rekenmachine
window.onload = function () {
    const buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result p')[0],
      clear = document.getElementsByClassName('clear')[0];
    
    //berekent de som
    for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
    }
    //maakt het veld leeg
    clear.onclick = function () {
    result.innerHTML = '';
    };  
    //returned undefined
    function addValue(i) {
    return function () {
        
      result.innerHTML += buttons[i].innerHTML;
        
    };
    }
    
    function calculate(i) {
    return function () {
        let final_res = result.innerHTML;
                           
                          
      result.innerHTML = eval(final_res);
    };
    }
  };