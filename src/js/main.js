/* Show Menu */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/* Remove menu mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Show scroll top */
// It will work only on devices with small screens (max-width:320px)
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

//Reduce the size and print on an A4 sheet
function scaleCV() {
  document.body.classList.add("scale-cv");
}

//Remove the size when the CV is donwloaded
function removeScale() {
  document.body.classList.remove("scale-cv");
}

// Generate PDF
let areaCV = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

//html2pdf options
let opt = {
  margin: 0,
  filename: "Ravil_CV.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

function generateResume() {
  html2pdf(areaCV, opt);
}

resumeButton.addEventListener("click", () => {
  scaleCV();

  generateResume();

  setTimeout(removeScale, 5000);
});
