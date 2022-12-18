import UrlParser from '../../routes/url-parser';
import cafeDbSource from '../../data/cafedb-source';
import detailRestaurant from '../templates/detail-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div tabindex='0' id='main-content'>
      <div class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('.restaurant');
    const detail = await cafeDbSource.getRestaurantDetail(url.id);

    detailContainer.innerHTML = detailRestaurant(detail.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.restaurant.id,
        name: detail.restaurant.name,
        description: detail.restaurant.description,
        city: detail.restaurant.city,
        rating: detail.restaurant.rating,
        address: detail.restaurant.address,
        pictureId: detail.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
