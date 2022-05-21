<template>
  <v-card
    class="mx-auto rounded"
    max-width="180"
  >
    <v-img
      :src="src"
      height="120px"
      width="120px"
      style="position: relative; margin: 30px 30px 0 30px;"
    ></v-img>

    <v-card-text style="font-size: 14px; font-weight: 700; text-align: center; display: block;">
      {{title1}}
    </v-card-text>
    <v-card-text style="font-size: 14px; font-weight: 700; text-align: center; display: block;">
      {{title2}}
    </v-card-text>

    <v-card-subtitle style="text-align: center; color: #14bef0;">
      {{button}}
    </v-card-subtitle>
    
  </v-card>
</template>

<script>
    export default {
        name: "SingleConsultCard",
        props: ['src','title1','title2','button']
    }
</script>

<style scoped>

</style>