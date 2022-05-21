<template>
  <div>
    <v-col>
      <v-spacer></v-spacer>
      <v-container>
        <v-container>
          <h1>Book an appointment for an in-clinic consultation</h1>
          <p>Find experienced doctors across all specialties</p>
        </v-container>

        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(color, i) in colors"
            :key="color"            
            style="transition: none;"
          >
            <v-row class="fill-height" align="center" justify="center">
              <div v-for="(color1, j) in colorsitem" :key="j">
                <div class="text-h2" v-if="j >= i && j < i + 4" style="margin: 45px;">
                  <SingleCard
                    :src="color1.src"
                    :title="color1.title"
                    :subtitle="color1.subtitle"
                  />
                </div>
              </div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-container>
      <v-spacer></v-spacer>
    </v-col>
  </div>
</template>

<script>
import SingleCard from "./SingleCard.vue";
export default {
  name: "BookDoctor",
  data() {
    return {
      colors: ["red", "green", "yellow", "red1", "green1", "yellow1"],
      colorsitem: [
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
          title: "Dentist",
          subtitle: "Teething troubles? Schedule a dental checkup",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
          title: "Gynecologist/Obstetrician",
          subtitle: "Explore for women’s health, pregnancy and infertility treatments",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
          title: "Dietitian/Nutrition",
          subtitle: "Get guidance on eating right, weight management and sports nutrition",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
          title: "Physiotherapist",
          subtitle: "Pulled a muscle? Get it treated by a trained physiotherapist",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
          title: "General surgeon",
          subtitle: "Need to get operated? Find the right surgeon",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
          title: "Orthopedist",
          subtitle: "For Bone and Joints issues, spinal injuries and more",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
          title: "General physician",
          subtitle: "Find the right family doctor in your neighborhood",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
          title: "Pediatrician",
          subtitle: "Child Specialists and Doctors for Infant",
        },
        {
          src: "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg",
          title: "Gastroenterologist",
          subtitle: "Explore for issues related to digestive system, liver and pancreas",
        },
      ],
    };
  },
  components: { SingleCard },
};
</script>

<style scoped></style>
