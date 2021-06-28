function showResults(results) {
  const contentResultsEl = document.querySelector(".desafios");
  const templateEl = document.querySelector("#template-content");
  for (const r of results) {
    const titleEl = document.querySelector(".desafio-item-title");
    titleEl.textContent = r.fields.titulo;
    // const imgEl = document.querySelector(".desafio-item-img");
    // imgEl.src = r.field.

    //   desafio-item-title, desafio-item-img, desafio-item-description, desafio-item-link
    //  que agarrar: titulo, descripcion, url,
    const clone = document.importNode(templateEl.content, true);
    contentResultsEl.appendChild(clone);
  }
}

function main() {
  const button = document.querySelector(".button-search-header");
  button.addEventListener("click", () => {
    fetch(
      "https://cdn.contentful.com/spaces/prwodad3pg7p/environments/master/entries?access_token=gccrkxanjuuNEPsRAig5_FSTdZT20ps6ou4JopI7JL0"
    )
      .then((res) => res.json())
      .then((data) => showResults(data.items));
  });
}

main();
