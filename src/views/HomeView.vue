<script>
import { RouterLink,RouterView} from 'vue-router';
export default{
    data(){
        return{
            page :1,
        }
    },
    components:{
        RouterLink,
        RouterView,
    },
    methods:{
        GeolocationSearch(){
            this.page +=1;
        }
    }
}
</script>

<template>
    <div class="body" v-if="this.page===1">
        <div>
            <!-- ///////////////////////輪播//////////////////////////////////////////////// -->
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active ">
                <img src="../../public/banner1.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item ">
                <img src="../../public/banner2.png" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item ">
                <img src="../../public/banner3.png" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>        
            <div class="footer">
                <div class="footerContent">
                <div class="HomeBox1">
                <RouterLink to="#">タッグから探す</RouterLink>
                </div>
                <div class="HomeBox1">
                    <RouterLink to="/LocationSearch" @click="GeolocationSearch()">エリアから探す</RouterLink>
                    
                <!-- <RouterLink to="/LocationSearch">エリアから探す(location)</RouterLink> -->
                </div>
                <div class="HomeBox1">
                <RouterLink to="#">沿線．駅から探す</RouterLink>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="this.page=== 2">
        <RouterView/>
    </div>
</template>

<sytle lang="scss" scoped>

a{
    color: white;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
}

.carousel-inner{
    height: 50vh;
}
.footer{
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .footerContent{
        width: 50%;
        height: 60%;
        display: flex;
        justify-content: space-between;
        .HomeBox1{
            height: 100px;
            width: 200px;
            border-radius: 10px;
            background-color: #475467;   
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    } 
}



</sytle>
