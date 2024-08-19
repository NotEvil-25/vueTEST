<template>
    <header class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-black-alpha-10">
        <img src="/src/assets/images/logo.png">

        <router-link to="/cart">
            <Button icon="pi pi-shopping-cart" :badge="8" />
        </router-link>
    </header>
</template>
