const card = document.getElementsByClassName("card");
const fitur = document.getElementById("fitur");
const img = document.getElementsByTagName("img");
const h1 = document.getElementsByTagName("h1");

// ini card
card[0].style.color = "red";

// ini fitur
fitur.innerText = "wleee";

// ini img
img[0].src =
  "https://cdn1-production-images-kly.akamaized.net/U0hp_eK4MyjdtIsvs_tUiTRA-Pg=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3046288/original/003680400_1581329492-wa_5.jpg";

for (let i = 0; i < h1.length; i++) {
  h1[i].style.color = "red";
  h1[i].style.backgroundColor = "blue";
}
