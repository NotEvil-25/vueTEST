
<template>
    <Listbox 
        v-model="selectedBrands"
        :options="items"
        multiple
        optionLabel="title"
        class="w-full" />
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

defineProps({
    items: Array
});

const store = useStore();
const selectedBrands = computed({
    get: () => store.state.brandsFilter.selectedBrands,
    set: (value) => store.commit('selectBrand', value)
});

// const selectBrand = (e) => { 
//     store.commit('selectBrand', e.value);
// };
</script>