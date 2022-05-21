<template>
  <div>
    <v-col>
      <v-spacer></v-spacer>
      <v-container>
        <v-container style="position: relative">
          <h1>Consult top doctors online for any health concern</h1>
          <p>
            Private online consultations with verified doctors in all
            specialists
          </p>
          <v-btn
            elevation="2"
            outlined
            raised
            large
            class="primary--text"
            style="position: absolute; top: 20px; right: 20px"
            >View All Specialities</v-btn
          >
          <!-- <button></button> -->
        </v-container>
        <v-container class="d-flex"> </v-container>
        <v-container class="d-flex">
          <SingleConsultCard
            src="https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png"
            title1="Period doubts or"
            title2="Pregnancy "
            button="CONSULT NOW"
          />
          <SingleConsultCard
            src="https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png"
            title1="Acne, pimple or"
            title2=" skin issues"
            button="CONSULT NOW"
          />
          <SingleConsultCard
            src="https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
            title1="Performance"
            title2=" issues in bed"
            button="CONSULT NOW"
          />
          <SingleConsultCard
            src="https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png"
            title1="Cold, cough or"
            title2=" fever"
            button="CONSULT NOW"
          />
          <SingleConsultCard
            src="https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
            title1="Child not feeling"
            title2=" well"
            button="CONSULT NOW"
          />
          <SingleConsultCard
            src="https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png"
            title1="Depression or"
            title2=" anxiety"
            button="CONSULT NOW"
          />
        </v-container>
      </v-container>
      <v-spacer></v-spacer>
    </v-col>
  </div>
</template>

<script>
import SingleConsultCard from "./SingleConsultCard.vue";
export default {
  name: "ConsultDoctor",
  components: { SingleConsultCard },
};
</script>

<style scoped></style>
