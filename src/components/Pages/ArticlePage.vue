<template>
  <div>
    <v-col>
      <v-spacer></v-spacer>
      <v-container class="d-flex" style="padding: 0 80px;">
        
          <v-card style="margin: 0 10px;" width="340px" elevation="0">
            <v-card-title style="font-size: 30px; font-weight: 700;">Read top articles from health experts</v-card-title>
            <v-card-text
              >Health articles that keep you informed about good health
              practices and achieve your goals.</v-card-text
            >
            <v-card-text><v-btn color="primary">See all articles </v-btn></v-card-text>
            
          </v-card>
          <v-card style="margin: 10px;" width="280px" elevation="0">
            <v-img src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910" width="280px" height="200px"></v-img>
            <v-card-title>Coronavirus</v-card-title>
            <v-card-text
              >12 Coronavirus Myths and Facts That You Should Be Aware Of</v-card-text
            >
            <v-card-text
              >Dr. Diana Borgio</v-card-text
            >
          </v-card >
          <v-card style="margin: 10px;" width="280px" elevation="0">
            <v-img src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c" width="280px" height="200px"></v-img>
            <v-card-title>Vitamins and Supplements</v-card-title>
            <v-card-text
              >Eating Right to Build Immunity Against Cold and Viral Infections</v-card-text
            >
            <v-card-text
              >Dr. Diana Borgio</v-card-text
            >
          </v-card>
        
      </v-container>
      <v-spacer></v-spacer>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
};
</script>

<style scoped></style>
