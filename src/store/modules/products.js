import { getAllProducts } from '../../api';

const moduleProducts = {
    state: () => ({
        isLoadedProducts: false,
        items: [],
        inCart: []
    }),
    mutations: {
        gotProducts(state, payload) {
            state.items.push(...payload);
            state.isLoadedProducts = true;
        },
        putItemInCart(state, payload) {
            state.inCart.push(payload);
        },
        removeItemFromCart(state, payload) {

        }
    },
    actions: {
        async loadAllProducts({commit}) {
            commit('gotProducts', await getAllProducts());
        }
    },
    getters: {}
}

export default moduleProducts;