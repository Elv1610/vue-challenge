<template>
<div id="app">
  <body>
    <Header />
    <main class="product-page">
      <div class="container">
        <ul class="product-list">
          <Card />
        </ul>

        <nav class="pagination">
          <ul class="pagination__list">
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                <svg
                  class="icon"
                  width="8px"
                  height="10px"
                  viewBox="18 18 8 10"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Arrow Left</title>
                  <polygon
                    id="Left-Icon"
                    stroke="none"
                    fill-rule="evenodd"
                    transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) "
                    points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
                  />
                </svg>
              </a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">1</a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">2</a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">3</a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">...</a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">10</a>
            </li>
            <li class="pagination__item">
              <a href="#" class="pagination__link">
                <svg
                  class="icon"
                  width="8px"
                  height="10px"
                  viewBox="18 18 8 10"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <title>Arrow Right</title>
                  <polygon
                    id="Left-Iocn"
                    stroke="none"
                    fill-rule="evenodd"
                    points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
    <Footer />
  </body>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card";
import globalStateApp from "./main";

export default {
  data: function () {
    return {
      apiData: globalStateApp.data
    }
  },
  name: "app",
  components: {
    Header,
    Footer,
    Card
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

  // <!-- <li class="product-list__item">
  //             <article class="product" itemscope itemtype="http://schema.org/Product">
  //               <figure class="product__image-wrapper">
  //                 <img
  //                   class="product__image"
  //                   src="images/activity_image.jpeg"
  //                   alt="Product"
  //                   itemprop="image"
  //                 />
  //                 <button class="product__wishlist-button button button--round button--wishlist">
  //                   <svg
  //                     class="icon"
  //                     width="20px"
  //                     height="20px"
  //                     viewBox="0 6 20 20"
  //                     version="1.1"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                     xmlns:xlink="http://www.w3.org/1999/xlink"
  //                   >
  //                     <title>Wishlist Icon</title>
  //                     <polygon
  //                       id="Wishlist-Icon"
  //                       stroke="none"
  //                       fill-rule="evenodd"
  //                       points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"
  //                     />
  //                   </svg>
  //                 </button>
  //               </figure>
  //               <div class="product__details">
  //                 <h1 class="product__title" itemprop="brand">Product Title</h1>
  //                 <p class="product__subtitle" itemprop="description">Product Description</p>
  //                 <div class="product__price" itemscope itemtype="http://schema.org/Offer">
  //                   <span class="product__price" itemprop="price">£210</span>
  //                 </div>
  //                 <button class="product__add-to-cart button button--primary button--in-cart">In Cart</button>
  //               </div>
  //             </article>
  //           </li> -->