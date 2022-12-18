import CONFIG from '../../globals/config';

const detailRestaurant = (restaurant) => `
  <h2 class='restaurant__title'>${restaurant.name}</h2>
  <img class='restaurant__poster lazyload' alt='${restaurant.name}' data-src='${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}'/>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>

  <div class="restaurant__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description} minutes</p>
  </div>

  
  <div class="detail-menu">
  <h3>Menu</h3>
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${restaurant.menus.foods.map((food, i) => `
            <li><p>${i + 1}) ${food.name}</p></li>
          `).join('')}
        <ul>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
          `).join('')}
        <ul>
      </div>
    </div>

  <div class="review">
  <h3>Review</h3>
  <p>${restaurant.customerReviews.map((review) => `
    <div class="detail-review-item">
      <div class="review-header">
        <p class="review-name">${review.name}</p>

        <p class="review-date">${review.date}</p>
      </div>

      <div class="review-body">
        ${review.review}
      </div>
    </div>
    `).join('')}</p>
  </div> 
`;

export default detailRestaurant;
