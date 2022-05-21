<template>
  <v-card
    class="mx-auto rounded"
    max-width="198"
  >
    <v-img
      :src="src"
      height="200px"
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{subtitle}}
    </v-card-subtitle>
    
  </v-card>
</template>


<script>
    export default {
        name: "SingleCard",
        props: ['src','title','subtitle']
    }
</script>

<style scoped>

</style>