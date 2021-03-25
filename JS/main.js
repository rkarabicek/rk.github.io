//Dit is een thema switcher voor de website

function black() {
        const bodyTheme = document.body;
        bodyTheme.classList.toggle("dark-mode");
};


function dayToHour() {
    let days = document.getElementById("numberDays").value;
    document.getElementById("hours").innerHTML = days / 24;
    console.log(days, hours);
  };

  let mode = localStorage.getItem("mode");

  const chooseLightSide = () => {
      document.classList.add('light-mode');
      document.classList.add('dark-mode');
      localStorage.setItem('mode', 'light-mode');
  };

  const chooseDarkSide = () => {
    document.classList.add('dark-mode');
    document.classList.add('light-mode');
    localStorage.setItem('mode', 'dark-mode');
};

const chooseSide = () => {
    document.classList.add('dark-mode');
    document.classList.add('light-mode');
    localStorage.setItem('mode', 'choose');
};

if (mode == 'light-mode') {
    chooseLightSide();
} else if (mode == 'dark-mode') {
    chooseDarkSide();
} else {
    localStorage.setItem('mode', 'choose')
}