export const store = {
  state: {
    wishlistCounter: 0,
  },
  addItemToWishlist() {
    //eslint-disable-next-line
    if (this.debug) console.log('addItemToWishlist triggered with');
    this.state.wishlistCounter += 1;
  }
};