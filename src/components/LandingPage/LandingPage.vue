<template>
    <div>
        <SearchBar />
        <BrandPage />
        <CardS />
        <ConsultDoctor />
        <BookDoctor />
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import BrandPage from './BrandPage.vue';
import CardS from './CardS.vue';
import ConsultDoctor from './ConsultDoctor.vue';
import BookDoctor from './BookDoctor.vue';
    export default {
    name: "LandingPage",
    components: { SearchBar, BrandPage, CardS, ConsultDoctor, BookDoctor }
}
</script>

<style scoped>

</style>