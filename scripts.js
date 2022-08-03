const menueElement = document.querySelector("#menu");

fetch("https://codice-boca.web.app/menu")
  .then(res => res.json())
  .then(menuItems => {
    let html = ""

    menuItems.forEach(recipe => {
      let htmlSegment = `<div class="menu-item">
            <h3>${recipe.title}</h3>
            <p> ${recipe.description}</p>
            </div>`

      html += htmlSegment;
    });
    menueElement.innerHTML = html;
  })
  .catch(err => console.error(err));
