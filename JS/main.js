function loadHTML(selector, url) {
  const element = document.querySelector(selector);
  if (element) {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        element.innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        eval(doc.querySelector('script').textContent);
      });
  }
}

// Load navbar and footer
loadHTML('.nav', '/Navigation/navheader.html');
loadHTML('.footer', '/Navigation/footer.html');
