<script>
import Obj1 from '../components/ObjectA.vue'
export default{
    data(){
        return{
        }
    },
    components:{
        Obj1
    },
    methods:{
        GoObj1(){
            this.$router.push('/ObjectA');
        }
    }
}
</script>

<template>

<div class="body">
    <div class="MainArea">
        <div class="ObjectA">
            <div class="ObjectABox"></div>
                <div class="ObjectAText">
                    <button type="button" @click="GoObj1()">都心区　A物件</button>
                    <hr>
                    <div></div>
                </div>
                <hr/>
        </div>
        <div class="ObjectA">
            <div class="ObjectABox"></div>
                <div class="ObjectAText">
                    <button type="button" @click="GoObj2()">都心区　B物件</button>
                    <hr>
                    <div></div>
                </div>
                <hr/>
        </div>
        <div class="ObjectA">
            <div class="ObjectABox"></div>
                <div class="ObjectAText">
                    <button type="button" @click="GoObj3()">都心区　C物件</button>
                    <hr>
                    <div></div>
                </div>
                <hr/>
        </div>
        <div class="ObjectA">
            <div class="ObjectABox"></div>
                <div class="ObjectAText">
                    <button type="button" @click="GoObj4()">都心区　D物件 </button>
                    <hr>
                    <div></div>
                </div>
                <hr/>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
button{
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 0;
    height: 20px;
    border: none;
    background-color: #BEC0CD;
    color: #475467;

}

hr{
    margin: 1px ;
    height: 1px;
}
.body{
    height: 85vh;
    width:100%;
    background-color: #BEC0CD;
}
.MainArea{
    height: 100%;
    width: 70%;
    margin: 0 15%;
    padding-top: 3%;
    .ObjectA{
            height: 100px;
            width: 100%;
            border: 1px;
            display: flex;
            margin-bottom: 30px;
            .ObjectABox{
                height: 100px;
                width: 110px;
                background-color: #475467;
                border-radius: 15px;
            }
            .ObjectAText{
                width: 100%;
                padding: 0 30px;
            }
            
    }
}

</style>
