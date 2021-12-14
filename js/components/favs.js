import getExistingFavs from "./favFunctions.js";

const favourites = getExistingFavs();

export function toggleFavourites() {
  const favButtons = document.querySelectorAll("#product i");

  favButtons.forEach((iconButton) => {
    iconButton.addEventListener("click", handleClick);
  });
  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const description = this.dataset.description;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentFavs = getExistingFavs();

    const itemExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });
    if (itemExists === undefined) {
      const product = { id: id, title: title, description: description, price: price, image: image };

      currentFavs.push(product);

      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }
  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}
