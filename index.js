function deleteResults() {
  const button = document.querySelector(".button-search-header");
  const contentResultsEl = document.querySelector(".desafios");
  button.addEventListener("click", () => (contentResultsEl.innerHTML = ""));
}

function showResults(results) {
  const contentResultsEl = document.querySelector(".desafios");
  const templateEl = document.querySelector("#template-content");
  for (const r of results) {
    const titleEl = templateEl.content.querySelector(".desafio-item-title");
    titleEl.textContent = r.fields.titulo;
    const descriptionEl = templateEl.content.querySelector(
      ".desafio-item-description"
    );
    descriptionEl.textContent = r.fields.descripcion;
    const linkEl = templateEl.content.querySelector(".desafio-item-link");
    linkEl.href = r.fields.url;
    const imgEl = templateEl.content.querySelector(".desafio-item-img");

    //   desafio-item-title, desafio-item-img, desafio-item-description, desafio-item-link
    //  que agarrar: titulo, descripcion, url,
    const clone = document.importNode(templateEl.content, true);
    contentResultsEl.appendChild(clone);
  }
}

function main() {
  const button = document.querySelector(".button-search-header");
  deleteResults();
  button.addEventListener("click", () => {
    fetch(
      "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=gccrkxanjuuNEPsRAig5_FSTdZT20ps6ou4JopI7JL0"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   .then((data) => showResults(data.items));
  });
}

main();
