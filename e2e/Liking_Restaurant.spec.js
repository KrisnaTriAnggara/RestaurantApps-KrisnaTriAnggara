/* eslint-disable no-undef */
Feature('Liking Restaurants');
const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurants');
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.restaurants');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.restaurants');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item a', 10);

  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario(' unlike restaurant', async ({ I }) => {
  I.see('Silahkan tambah restaurant favoritemu dulu di halaman utama', '.restaurants');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item a', 10);
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants');
  const unlikedRestaurant = await I.grabTextFrom('.restaurants');

  assert.strictEqual(unlikedRestaurant, 'Silahkan tambah restaurant favoritemu dulu di halaman utama');
});
