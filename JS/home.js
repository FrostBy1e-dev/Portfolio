/* Picture Changing Function */
// Array of image URLs
const images = ["Images/pic1.png", "Images/pic1.png"];
var duration = 2 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

/* modal; */
window.onload = function () {
  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";
};

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

/* random profile image (DEPRECATED) */
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

document
  .getElementById("homeBlobImg")
  .setAttribute("xlink:href", getRandomImage());

document.getElementById("openPDFButton").addEventListener("click", function () {
  const pdfUrl = "PDF/resume.pdf";

  window.open(pdfUrl, "_blank");
});

const contactButton = document.getElementById("contactButton");
const contactPopup = document.getElementById("contactPopup");
const footer = document.querySelector("footer");

let isPopupVisible = false;

contactButton.addEventListener("click", function () {
  if (isPopupVisible) {
    contactPopup.classList.add("hide");
    contactPopup.classList.remove("show");

    setTimeout(function () {
      contactPopup.style.display = "none";
    }, 300);
  } else {
    contactPopup.style.display = "block";
    contactPopup.classList.add("show");
    contactPopup.classList.remove("hide");
  }

  isPopupVisible = !isPopupVisible;

  setTimeout(function () {
    if (isPopupVisible) {
      contactPopup.classList.add("hide");
      contactPopup.classList.remove("show");
      isPopupVisible = false;

      setTimeout(function () {
        contactPopup.style.display = "none";
      }, 300);
    }
  }, 3000);
});

contactPopup.addEventListener("click", function () {
  footer.scrollIntoView({ behavior: "smooth" });
});
