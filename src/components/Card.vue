<template>
  <li class="product-list__item">
    <article class="product" itemscope itemtype="http://schema.org/Product">
      <figure class="product__image-wrapper">
        <img class="product__image" src="images/activity_image.jpeg" alt="Product" itemprop="image" />
        <button
          @click="addToWishlist()"
          class="product__wishlist-button button button--round button--wishlist"
        >
          <svg
            class="icon"
            width="20px"
            height="20px"
            viewBox="0 6 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Wishlist Icon</title>
            <polygon
              id="Wishlist-Icon"
              stroke="none"
              fill-rule="evenodd"
              points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
            />
          </svg>
        </button>
      </figure>
      <div class="product__details">
        <h1 class="product__title" itemprop="brand">Product Title</h1>
        <p class="product__subtitle" itemprop="description">Product Description</p>
        <div class="product__price" itemscope itemtype="http://schema.org/Offer">
          <span class="product__price--strike">£210</span>
          <span class="product__price--discounted" itemprop="price">£210</span>
        </div>
        <button class="product__add-to-cart button button--primary">Add to Cart</button>
      </div>
    </article>
  </li>
</template>

<script>
import { store } from "../store/store";
export default {
  name: "Card",
  methods: {
    addToWishlist() {
      store.addItemToWishlist();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
