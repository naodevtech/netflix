export default function Header(props, videoUrlKey) {
  
return `
<iframe src="https://www.youtube.com/embed/${videoUrlKey}?rel=0?version=3&autoplay=1&controls=0" frameborder="0" allowfullscreen></iframe>
        <div class="header__container">
          <h1 class="header__container-heading">${props.original_title || props.name}</h1>
          <button class="header__container-btnPlay">
            Play
          </button>
  
          <button class="header__container-btnFavouriteList">
            Favourite List
          </button>
          <p class="header__container-overview">${props.overview}</p>
        </div>
      `;
}