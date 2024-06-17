const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


//search
document.addEventListener('DOMContentLoaded', function() {
  // Get the search input and content list elements
  const searchInput = document.getElementById('search');
  const contentList = document.getElementsByClassName('movie-list-item');

  // Add an event listener for the search input
  searchInput.addEventListener('input', function(event) {
      const query = event.target.value.toLowerCase();
      filterContent(query);
  });

  function filterContent(query) {
      const contentItems = contentList.getElementsByClassName('movie-list-item');
      for (let item of contentItems) {
          const title = item.getElementsByClassName('movie-list-item-title').toLowerCase();
          if (title.includes(query)) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      }
  }
});

