/* Picture Changing Function */
// Array of image URLs
const images = [
  'Images/pic1.png',
  'Images/pic2.png'
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

document.getElementById('homeBlobImg').setAttribute('xlink:href', getRandomImage());

document.getElementById('openPDFButton').addEventListener('click', function() {
  const pdfUrl = "PDF/resume.pdf";
  
  window.open(pdfUrl, '_blank');
});
