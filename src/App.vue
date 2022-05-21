<template>
  <v-app>
    <NavBar />
    <LandingPage />
    <ArticlePage />
    <UserReview />
    <DownloadApp />
    <FooterPage />
  </v-app>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';
import LandingPage from './components/LandingPage/LandingPage.vue';
import ArticlePage from './components/Pages/ArticlePage.vue';
import UserReview from './components/Pages/UserReview.vue';
import DownloadApp from './components/Pages/DownloadApp.vue';
import FooterPage from './components/Pages/FooterPage.vue';
  export default {
    name: "App",
    components: { NavBar, LandingPage, ArticlePage, UserReview, DownloadApp, FooterPage }
}
</script>

<style scoped>

</style>