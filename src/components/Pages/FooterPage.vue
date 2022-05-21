<template>
  <div style="background-color: #28328c">
    <v-spacer></v-spacer>
    <div>
        <v-container class="d-flex" >
      <div style="display: flex; flex-direction: column; margin-right: 40px;" >
        <v-list v-for="(practoItem, i) in Practo" :key="i" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ practoItem }}</v-list-item>
        </v-list>
      </div>
      <div style="display: flex; flex-direction: column; margin-right: 40px;">
        <v-list v-for="(For_patient, k) in For_patients" :key="k" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ For_patient }}</v-list-item>
        </v-list>
      </div>
      <div style="display: flex; flex-direction: column; margin-right: 40px;">
        <v-list v-for="(For_doctor, j) in For_doctors" :key="j" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ For_doctor }}</v-list-item>
        </v-list>
      </div>
      <div style="display: flex; flex-direction: column; margin-right: 40px;">
        <v-list v-for="(For_hospital, l) in For_hospitals" :key="l" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ For_hospital }}</v-list-item>
        </v-list>
      </div>
      <div style="display: flex; flex-direction: column; margin-right: 40px;">
        <v-list v-for="(MoreItem, m) in More" :key="m" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ MoreItem }}</v-list-item>
        </v-list>
      </div>
      <div style="display: flex; flex-direction: column; margin-right: 40px;">
        <v-list v-for="(SocialItem, n) in Social" :key="n" style="background-color: #28328c; padding: 0; height: 25px; font-weight: 300;">
          <v-list-item style="color: white;">{{ SocialItem }}</v-list-item>
        </v-list>
      </div>
    </v-container>
    <v-container style="text-align: center;">
        <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="img">
        <p style="color: gray; text-align: center;">Copyright © 2017, Practo. All rights reserved.</p>
    </v-container>
    </div>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "FooterPage",
  data() {
    return {
      Practo: ["Practo", "About", "Blog", "Careers", "Press", "Contact Us"],
      For_patients: [
        "For patients",
        "Search for doctors",
        "Search for clinics",
        "Search for hospitals",
        "Book Diagnostic Tests",
        "Book Full Body Checkups",
        "Practo Plus",
        "Covid Hospital listing",
        "Practo Care Clinics",
        "Read health articles",
        "Read about medicines",
        "Practo drive",
        "Health app",
      ],
      For_doctors: [
        "For doctors",
        "Practo Profile",
        "For clinics",
        "Ray by Practo",
        "Practo Reach",
        "Ray Tab",
        "Practo Pro",
      ],

      For_hospitals: [
        "For hospitals",
        "Insta by Practo",
        "Qikwell by Practo",
        "Practo Profile",
        "Practo Reach",
        "Practo Drive",
        "For Corporates",
        "Wellness Plans",
      ],
      More: [
        "More",
        "Help",
        "Developers",
        "Privacy Policy",
        "Terms & Conditions",
        "Healthcare Directory",
        "Practo Health Wiki",
      ],
      Social: [
        "Social",
        "Facebook",
        "Twitter",
        "LinkedIn",
        "Youtube",
        "Github",
      ],
    };
  },
};
</script>

<style scoped>

</style>
