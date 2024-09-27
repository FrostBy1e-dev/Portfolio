/* Picture Changing Function */
// Array of image URLs
const images = ["Images/pic1.png", "Images/pic1.png"];

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
