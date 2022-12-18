import cafeDbSource from '../../data/cafedb-source';
import listRestaurant from '../templates/list-restaurant-template';

const Home = {
  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Carilah Restoran Indonesia Disini</h1>
        <p class="hero__tagline">Nikmati Restoran Yang Ada Di Indonesia</p>
      </div>
    </div>
    <div tabindex='0' id="main-content" class="explore">
      <h1 class="explore__label">Cari Restoran Disini</h1>
      <div id='list-restaurants' class="restaurants"></div>
    </div>
    `;
  },

  async afterRender() {
    const list = await cafeDbSource.getRestaurantList();
    console.log(list);
    const listContainer = document.querySelector('.restaurants');
    list.restaurants.forEach((restaurant) => {
      listContainer.innerHTML += listRestaurant(restaurant);
    });
  },
};

export default Home;
