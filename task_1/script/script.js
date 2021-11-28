const carouselText = [
  { text: "Freelancer", color: "red" },
  { text: "Webdeveloper", color: "orange" },
  { text: "Student", color: "blue" },
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.onscroll = () => {};
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  let nav = document.getElementsByClassName("c_nav")[0];
  if (scroll > 120) {
    document
      .getElementsByClassName("c_nav")[0]
      .style.setProperty("background-color", "#1b2631", "important");
  } else {
    document
      .getElementsByClassName("c_nav")[0]
      .style.setProperty("background-color", "#70707026", "important");
  }
  // Do something
});
