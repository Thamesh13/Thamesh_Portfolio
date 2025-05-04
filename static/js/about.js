const headerText = "Hello, I'm Thamesh V.";
const subtitleWords = [
  "Python Fullstack Developer",
  "Frontend Developer",
  "Backend Developer",
  "API Developer",
  "Web Developer",
  "React Developer",
  "Flask Developer",
  "Web Designer",
  "UI/UX Designer",
  "Prompt Engineer"
];
const headerElem = document.getElementById("typing-header");
const subtitleElem = document.getElementById("typing-subtitle");
const paragraphElem = document.getElementById("animated-paragraph");

let subtitleIndex = 0;
let typingIndex = 0;
let headerLoop, subtitleLoop, paragraphTimer;

function typeHeader() {
  let text = headerText.slice(0, typingIndex++);
  headerElem.innerHTML = text.replace("Thamesh V.", "<span class='gradient-text'>Thamesh V.</span>");
  if (typingIndex <= headerText.length) {
    headerLoop = setTimeout(typeHeader, 100);
  } else {
    setTimeout(typeSubtitle, 500);
  }
}

function typeSubtitle() {
  let word = subtitleWords[subtitleIndex];
  let subText = word.substring(0, typingIndex++);
  subtitleElem.textContent = subText;
  if (typingIndex <= word.length) {
    subtitleLoop = setTimeout(typeSubtitle, 80);
  } else {
    paragraphElem.style.opacity = 1;
    paragraphTimer = setTimeout(resetAnimation, 4000);
  }
}

function resetAnimation() {
  subtitleIndex = (subtitleIndex + 1) % subtitleWords.length;
  typingIndex = 0;
  headerElem.innerHTML = "";
  subtitleElem.textContent = "";
  paragraphElem.style.opacity = 0;
  setTimeout(typeHeader, 800);
}

window.onload = () => {
  typingIndex = 0;
  typeHeader();
};
