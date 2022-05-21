<template>
  <div>
    <template>
      <div>
        <v-app-bar color="#fff" height="70" elevation="1">
          <v-btn class="pl-2" width="14%" color="#fff" elevation="0"
            ><LogoIcon
          /></v-btn>

          <v-btn text small class="font-weight-bold"> Find Doctors </v-btn>

          <v-btn text small class="font-weight-bold"> Video Consult </v-btn>

          <v-btn text small class="font-weight-bold"> Medicines </v-btn>

          <v-btn text small class="font-weight-bold"> Medicines </v-btn>

          <v-btn text small class="font-weight-bold"> Surgeries </v-btn>

          <v-spacer></v-spacer>

          <v-btn text small class="font-weight-regular"> For Corporates </v-btn>

          <!-- <v-btn text small class="font-weight-regular">
            For Providers <v-icon>mdi-chevron-down</v-icon>
          </v-btn> -->

          <v-menu>
            <template v-slot:activator="{ on, attrs }" >
              <v-btn
                text
                small
                class="font-weight-regular"
                v-bind="attrs"
                v-on="on"
              >
                For Providers <v-icon >mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <div class="mt-13">
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  {{ item }}
                </v-list-item>
              </v-list>
            </div>
          </v-menu>

          <!-- <v-btn text small class="font-weight-regular">
            Security & help <v-icon>mdi-chevron-down</v-icon>
          </v-btn> -->

          <v-menu>
            <template v-slot:activator="{ on, attrs }" >
              <v-btn
                text
                small
                class="font-weight-regular"
                v-bind="attrs"
                v-on="on"
              >
                Security & help <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <div class="mt-13">
              <v-list>
                <v-list-item v-for="(help, ind) in helps" :key="ind">
                  {{ help }}
                </v-list-item>
              </v-list>
            </div>
          </v-menu>

          <v-btn
            class="font-weight-light text-caption mr-16"
            color="#fff"
            elevation="0"
            style="border: 1px solid gray"
            >Login/Signup</v-btn
          >
        </v-app-bar>
      </div>
    </template>
  </div>
</template>

<script>
import LogoIcon from "./LogoIcon.vue";

export default {
  name: "NavBar",
  components: { LogoIcon },
  data() {
    return {
      items: [
        "Practo Prime",
        "Software for providers",
        "List your practice for Free",
      ],
      helps: [
        "Data security",
        "Help"
      ],
    };
  },
};
</script>

<style scoped>
.v-menu__content{
  box-shadow: none;
}

</style>
