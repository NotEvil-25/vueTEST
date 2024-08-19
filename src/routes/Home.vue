
<script setup>
import BrandFilter from '../components/BrandFilter.vue';
import ProductCard from '../components/ProductCard.vue';
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore();

const isLoadedBrands = computed(() => store.state.brandsFilter.isLoadedBrands);
const isLoadedCards = computed(() => store.state.products.isLoadedProducts);
const isLoaded = computed(() => isLoadedBrands.value && isLoadedCards.value);

const cards = computed(() => store.state.products.items);
const brands = computed(() => store.state.brandsFilter.brands);

const filteredCards = computed(() => {
		const selectedBrandsCodes = store.state.brandsFilter.selectedBrands.map(
			(el) => Number(el.code.replace(/[^+\d]/g, ''))
		);

		if (selectedBrandsCodes.length) {
			const result = cards.value.filter(card => selectedBrandsCodes.includes(card.brand));
			return result.length ? result : false;
		}

		return cards.value;
	}
);

onMounted(() => {
	if (!isLoaded.value) {
		store.dispatch('loadAllProducts');
		store.dispatch('loadAllBrands');
	}
});
</script>

<template>
	<div
		v-if="!isLoaded"
		class="w-12 flex justify-content-center align-items-center"
	>
		<ProgressSpinner strokeWidth="5"/>
	</div>

	<div class="grid" v-if="isLoaded">
		<div class="col-12 md:col-3">
			<BrandFilter :items="brands"/>
		</div>
		<div class="grid col md:col-9" v-if="filteredCards.length">
			<div class="col md:col-4" v-for="item in filteredCards">
				<ProductCard :card="item"/>
			</div>
		</div>
		<div 
			class="col md:col-9"
			v-if="!filteredCards"
		>
			<div 
				class="w-full p-2 border-round-sm"
				style="backgroundColor: var(--bluegray-100)"
			>
				<span>
					<i class="pi pi-search"></i>
					Not found
				</span>
			</div>
		</div>
	</div>
</template>