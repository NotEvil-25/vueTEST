
<script setup>
    import { useStore } from 'vuex';

    defineProps({
        card: Object
    });

    const store = useStore();

    const selectCard = (value) => {
        store.commit('putItemInCart', value)
    }

    // const isSelected = computed(() => {

    // });
</script>
<template>
    <Card class="border-1" style="border-color: #cbd5e1;">
        <template #header>
            <img style="width: 100%;" alt="user header" :src="`/src/assets${card.image}`"/>
        </template>
        <template #title>{{ card.title }}</template>
        <template #subtitle>Brand {{ card.brand }}</template>
        <template #content>
            <span class="text-1xl font-semibold text-900">
                <span :v-if="card.regular_price === 'USD'">$</span>
                {{  card.regular_price.value }}
            </span>
        </template>
        <template #footer>
            <div class="flex gap-3 mt-1">
                <Button
                    @click="selectCard(card)"
                    icon="pi pi-shopping-cart"
                    label="Add to cart"
                    class="w-full" />
            </div>
        </template>
    </Card>
</template>

<script setup>
</script>
