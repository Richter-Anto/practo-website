<template>
  <v-col>
    <v-spacer></v-spacer>
    <v-carousel hide-delimiters style="display: flex; justify-content: center;">
      <v-carousel-item v-for="review in reviews" :key="review.name" style="width: 1100px;">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div style="font-size: 24px; width: 700px; text-align: center; margin-top: 100px;">{{ review.detail }}</div>
            <div style="font-size: 24px; width: 700px; text-align: center; margin-bottom: 100px;">{{ review.name }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-spacer></v-spacer>
  </v-col>
</template>

<script>
export default {
  name: "UserReview",
  data() {
    return {
      reviews: [
        {
          detail:
            "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
          name: "Amit Sharma",
        },
        {
          detail:
            "Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Practo for making it simple.",
          name: "Jyothi Bhatia",
        },
        {
          detail:
            "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
          name: "Avinash Kumar",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
