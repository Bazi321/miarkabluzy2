var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var rozmiar = document.getElementById('rozmiar');
var kolor = document.getElementById('kolor');
var sld1 = document.getElementById('sldimg1');
var sld2 = document.getElementById('sldimg2');
var sld3 = document.getElementById('sldimg3');
var sld4 = document.getElementById('sldimg4');

function zmianakoloru() {

  if (kolor.value === "czarny") {

    sld1.src = "images/img1-cz.png";
    sld2.src = "images/img2-cz.png";
    sld3.src = "images/img3.png";
    sld4.src = "images/img4.png";

  } else if  (kolor.value === "bialy") {

    sld1.src = "images/img1-bi.png";
    sld2.src = "images/img2-bi.png";
    sld3.src = "images/img3.png";
    sld4.src = "images/img4.png";

  }else if (kolor.value === "fioletowy") {

    sld1.src = "images/img1-fi.png";
    sld2.src = "images/img2-fi.png";
    sld3.src = "images/img3.png";
    sld4.src = "images/img4.png";

  }else if (kolor.value === "niebieski") {

    sld1.src = "images/img1-ni.png";
    sld2.src = "images/img2-ni.png";
    sld3.src = "images/img3.png";
    sld4.src = "images/img4.png";

  } else {

    sld1.src = "images/img1-ro.png";
    sld2.src = "images/img2-ro.png";
    sld3.src = "images/img3.png";
    sld4.src = "images/img3.png";
}

}

function generujkod1() {
  var kodcz1 = document.getElementById('kod1');
  if (kolor.value === "czarny") {
    kodcz1.innerHTML = "CZ";
  } else if (kolor.value === "bialy") {
    kodcz1.innerHTML = "BI";
  } else if (kolor.value === "fioletowy") {
    kodcz1.innerHTML = "FI";
  } else if (kolor.value === "niebieski") {
    kodcz1.innerHTML = "NI";
  }else {
    kodcz1.innerHTML = "RO";
  }
}

function generujkod2() {
  var kodcz2 = document.getElementById('kod2');
  if (rozmiar.value === "xs") {
    kodcz2.innerHTML = "-XS";
  } else if (rozmiar.value === "m") {
    kodcz2.innerHTML = "-M";
  } else if (rozmiar.value === "l") {
    kodcz2.innerHTML = "-L";
  } else if (rozmiar.value === "xl") {
    kodcz2.innerHTML = "-XL";
  }
}
