document.addEventListener("DOMContentLoaded", () => {
  const chisatoImg = document.getElementById("chisato");
  if (chisatoImg) {
    chisatoImg.addEventListener("click", () => {
      window.location.href = "https://vioufp.mimo.run/chisato.html";
    });
  }

  const takinaImg = document.getElementById("takina");
  if (takinaImg) {
    takinaImg.addEventListener("click", () => {
      window.location.href = "https://vioufp.mimo.run/takina.html";
    });
  }

  const kurumiImg = document.getElementById("kurumi");
  if (kurumiImg) {
    kurumiImg.addEventListener("click", () => {
      window.location.href = "https://vioufp.mimo.run/kurumi.html";
    });
  }

  const mainAbout = document.getElementById("main_about");
  if (mainAbout) {
    mainAbout.addEventListener("click", () => {
      window.location.href = "https://vioufp.mimo.run/about.html";
    });
  }

  const divOnOff = document.getElementById("navigate-new");
  const switchButton = document.getElementById("switchButton");

  if (switchButton && divOnOff) {
    switchButton.addEventListener("click", () => {
      divOnOff.classList.toggle("show");
    });
  }

 const btn1 = document.getElementById("btnFact1");
 const text1 = document.getElementById("text1");
 if (btn1 && text1) {
 btn1.addEventListener('click', () => {
 text1.classList.toggle("factTextShow");
 if (btn1.innerText === "показать") {
 btn1.innerText = "не показать";
 } else {
  btn1.innerText = "показать";
 }
 });
 }

 const btn2 = document.getElementById("btnFact2");
 const text2 = document.getElementById("text2");
 if (btn2 && text2) {
 btn2.addEventListener('click', () => {
 text2.classList.toggle("factTextShow");
 if (btn2.innerText === "показать") {
 btn2.innerText = "не показать";
 } else {
  btn2.innerText = "показать";
 }
 });
 }

 const btn3 = document.getElementById("btnFact3");
 const text3 = document.getElementById("text3");
 if (btn3 && text3) {
 btn3.addEventListener('click', () => {
 text3.classList.toggle("factTextShow");
 if (btn3.innerText === "показать") {
 btn3.innerText = "не показать";
 } else {
  btn3.innerText = "показать";
 }
 });
 }

 const btn4 = document.getElementById("btnFact4");
 const text4 = document.getElementById("text4");
 if (btn4 && text4) {
 btn4.addEventListener('click', () => {
 text4.classList.toggle("factTextShow");
 if (btn4.innerText === "показать") {
 btn4.innerText = "не показать";
 } else {
  btn4.innerText = "показать";
 }
 });
 }

 const btn5 = document.getElementById("btnFact5");
 const text5 = document.getElementById("text5");
 if (btn5 && text5) {
   btn5.addEventListener('click', () => {
    text5.classList.toggle("factTextShow");
    if (btn5.innerText === "показать") {
    btn5.innerText = "не показать";
    } else {
     btn5.innerText = "показать";
    }
   });
  }
});

const checkWhereGoTo = document.getElementById("select");
  function goTo() {
  let linkText = checkWhereGoTo.options[checkWhereGoTo.selectedIndex].text;
  let fullLink = "https://vioufp.mimo.run/" + linkText.toLowerCase() + ".html";
  if (linkText === "Main") {
      window.location.href = "https://vioufp.mimo.run/main.html";
  } else {
    window.location.href = fullLink;
  }
 }