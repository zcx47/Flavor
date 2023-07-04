/* eslint-disable no-undef */
const assert = require("assert");

Feature("Unliking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("Unliking one restaurant", async ({ I }) => {
  I.see("Tidak Ada Favorite");

  I.amOnPage("/");
  I.waitForElement(".card");
  I.seeElement(".card");

  const firstRestaurant = locate(".card").first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement("#favoriteButton");
  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.seeElement("#resto-favorite");
  const likedRestaurantName = await I.grabTextFrom(".card");

  // membandingkan apakah sama atau tidak
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(".card");

  I.waitForElement("#favoriteButton");
  I.seeElement("#favoriteButton");
  I.click("#favoriteButton");

  I.amOnPage("/#/favorite");
  I.see("Tidak Ada Favorite");
});
