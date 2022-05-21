<template>
  <div>
    <v-spacer></v-spacer>
    <v-container class="d-flex" style="padding: 0 140px;">
      <v-col style="width: 300px">
        <img
          src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
          alt="img"
          height="376px"
          width="332px"
        />
      </v-col>
      <v-col style="width: 500px">
        <h1>Download the Practo app</h1>
        <span style="margin: 15px 0 30px 0; display: inline-block;"
          >Access video consultation with India’s top doctors on the Practo app.
          Connect with doctors online, available 24/7, from the comfort of your
          home.</span
        >
        <span class="mb-2 mb-3 d-flex">Get the link to download the app</span>
        <p class="mb-7 d-flex">
          <span style="padding: 14px; border: 1px solid gray;">+91</span
          ><input type="text" placeholder="Enter phone number" style="border: 1px solid gray; padding: 12px;"/><v-btn color="#14bef0" style="margin-left: 10px; padding: 5px 25px; height: 50px;" class="white--text"
            >Send SMS</v-btn
          >
        </p>
        <p>
          <img
            src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
            alt="img"
            style="width: 130px; height: 40px; margin-right: 15px; cursor: pointer;"
          /><img
            src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
            alt="img"
            style="width: 130px; height: 40px; cursor: pointer;"
          />
        </p>
      </v-col>
    </v-container>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "DownloadApp",
};
</script>

<style scoped></style>
