import { getBrands } from '../../api';

const moduleBrands = {
    state: () => ({
        isLoadedBrands: false,
        brands: [],
        selectedBrands: []
    }),
    mutations: {
        gotBrands(state, payload) {
            state.brands.push(...payload);
            state.isLoadedBrands = true;
        },
        selectBrand(state, payload) {
            state.selectedBrands = payload
        }
    },
    actions: {
        async loadAllBrands({commit}) {
            commit('gotBrands', await getBrands());
        }
    },
    getters: {}
}

export default moduleBrands;