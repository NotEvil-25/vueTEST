import { createStore } from 'vuex';
import brandsFilter from './modules/brands';
import products from './modules/products';
// import inCart from './modules/inCart';

export default createStore({
  modules: {
    brandsFilter,
    products,
    // inCart
  }
})