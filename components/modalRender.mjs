export default function modalRender(props) {
    return `
            <div class="modal__container">
              <h2 class="modal__container-heading">${props.name}</h2>
              <div class="modal__container-details">
                <p class="modal__container-details-p">${Math.ceil(props.popularity)}%</p>
                <p class="modal__container-details-p">${props.first_air_date}</p>
                <p class="modal__container-details-p">${props.runtime}</p>
              </div>
              
              <p class="modal__container-overview">${props.overview}</p>
                <button class="modal__container-btnPlay"> Play </button>
                <button class="modal__container-btnFavouriteList"> My List </button>
            </div>
          `;
  }