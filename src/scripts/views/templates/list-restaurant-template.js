import CONFIG from '../../globals/config';

const listRestaurant = (restaurant) => `
  <article class="restaurant-item">    
    <a href='/#/detail/${restaurant.id}' class="restaurant-item__toDetail">
      <img class="restaurant-item__thumbnail" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
      <h3 class="restaurant-item__title">${restaurant.name}</h3>
    </a>
    <div class="restaurant-item__content">
      <p class="restaurant-item__city">${restaurant.city}</p>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </article>
      `;

export default listRestaurant;
