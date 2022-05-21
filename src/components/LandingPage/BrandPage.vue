<template>
    <div>   
        <v-col>
            <v-spacer></v-spacer>
            <v-container class="d-flex" style="height: 285px; border-radius: 30px; background: linear-gradient(105.21deg,#3743ab 2.85%,#141b56 99.41%);">
                <div class="practo_text">
                    <v-img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png" alt="img" class="practo_img" />
                    <p>Choose the experts in end to end surgical care.</p>
                    <p>You are in safe hands</p>
                    <button>Know more</button>
                </div>
                <v-img class="brand_img" src="https://www.practostatic.com/consumer-home/practo-care/1631634827/dweb_hero_banner.png" alt="img" width="500px" height="321px"/>
            </v-container>
            <v-spacer></v-spacer>
        </v-col>
    </div>
</template>

<script>
    export default {
        name: "BrandPage"
    }
</script>

<style scoped>
.practo_text{
    width: 50%;
    height: inherit;
    position: relative;
    margin: 40px;
}
.practo_text button{
    background-color: white;
    border-radius: 10px;
    padding: 6px 16px;
    font-weight: 500;
}
.practo_text p{
    color: white;
}
.practo_text :nth-child(3){
    font-size: 40px;
    font-size: 700;
}
.practo_img{
    width: 235px;
    height: 48px;
}
.brand_img{
    position: absolute;
    left: 800px;
    top: 188px;
}
</style>