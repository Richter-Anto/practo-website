<template>
    <div>
        <v-col>
            <v-spacer></v-spacer>
            <v-container class="d-flex">
                
            <SingleCard src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png" title="Instant Video Consultation" subtitle="Connect within 60 secs"/>
            <SingleCard src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png" title="Find Doctors Near You" subtitle="Confirmed appointments"/>
            <SingleCard src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png" title="Medicines" subtitle="Essentials at your doorstep"/>
            <SingleCard src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png" title="Lab Tests" subtitle="Sample pickup at your home"/>
            <SingleCard src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png" title="Surgeries" subtitle="Safe and trusted surgery centers"/>
                
            </v-container>
            <v-spacer></v-spacer>
        </v-col>
    </div>
</template>

<script>
import SingleCard from './SingleCard.vue';
    export default {
    name: "CardS",
    components: { SingleCard }
}
</script>

<style scoped>

</style>