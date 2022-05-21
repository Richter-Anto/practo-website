<template>
  <div>
    <v-col cols="12" class="d-flex">
      <v-col cols="1"></v-col>
      <v-col cols="6" class="d-flex">
        <v-col cols="5"><v-icon style="position: absolute; top: 106px;">mdi-map-marker-outline</v-icon>
        <span style="border: 1px solid gray; padding: 10px 25px;"><input type="text" placeholder="Bangalore" style="width: 251px; outline: none;"></span>
      </v-col>
      <v-col cols="7"><v-icon style="position: absolute; top: 106px;">mdi-magnify</v-icon>
        <span style="border: 1px solid gray; padding: 10px 25px;"><input type="text" placeholder="Search doctors, clinics, hospitals, etc." style="width: 100%; outline: none;"></span>
      </v-col>
      </v-col>
      <v-col cols="5" class="d-flex">
          <v-col cols="5"></v-col>
          <v-col cols="5"><v-img src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="img" height="40px" width="207px"/></v-col>
          <v-col cols="2"></v-col>
      </v-col>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped></style>
