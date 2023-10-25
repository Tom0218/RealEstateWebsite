<script>
import { RouterLink} from 'vue-router';
import Register from '../components/Register.vue'
export default{
    components:{
        RouterLink,
        Register
    },
    data(){
        return{
            page:1,
            Account:"",
            Password:"",
            ShowText:"",
        }
    },
    methods:{
        GoLogin(x){
            this.page = x;
        },
        Register(){
            this.page = this.page +1;
        },
        Login(){
            let DBData = JSON.parse(localStorage.getItem('user'))
            for (let i = 0; i < DBData.length; i++) {
                if (this.Account === DBData[i].Account && this.Password ===DBData[i].Password) {
                    this.ShowText="登入成功"
                    this.$router.push('/PersonalPage');
                    
                    break
                }else {
                    this.ShowText="帳號或密碼錯誤"
                }      
            }
        }
    }
}
</script>





<template>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="body">
    <div class="content" v-if="this.page == 1">
        <div class="inputArea">      
            <h1>LogIn</h1>     
            <p>Email</p>
            <div class="email d-flex">
                <input type="email" v-model="Account">
                <i class="fa-sharp fa-regular fa-circle-question" ></i>
            </div>
            <p>Name/Password</p>
            <div class="NamePassword d-flex">
                <input type="text" v-model="Password">
                <i class="fa-sharp fa-regular fa-circle-question" ></i>
            </div>
            <!-- checkbox/SignUp -->
            <div class="checkboxSignup">
                <input type="checkbox" value="" class="inpuutbox"  >ログインを保持する
                <button type="button" @click="Register()" class="Registerbtn">新規登録</button>
            </div>
            <div class="showText">
                <p>{{ ShowText }}</p>
            </div>
            <div>
                <button type="button" value="ログイン" @click="Login()">ログイン</button>
            </div>
        </div>          
    </div>
    <div v-if=" this.page == 2">
    <Register @mark1 ="GoLogin"/>
    </div>
    <div v-if=" this.page == 3">
    </div>
</div>
</template>






<style lang="scss" scoped>

.body{
    margin: 0;
    height:100%;
    background: #BEC0CD;
}
h1{
    text-align: center;
}
p{
    font-size: 12pt;
    margin-bottom: 2px;
}
i{
    position: absolute;
    font-size: 14pt;
    right: 10px;
    margin-top: 6px;
}
input{
    width: 300px;
    height: 30px;
    border-radius: 5px;
}
.content{
    height: 80vh;
    display: flex;
    justify-content: center;
    .inputArea{
        width: 300px;
        height: 300px;
        margin-top: 100px;
        position: relative;
        .checkboxSignup{
            margin-top: 20px;
            display: flex;
            align-items: center;
            input{
                height: 20px;
                width: 30px;
            }
        }
        button{
            width: 150px;
            height: 35px;
            margin-left: 80px;
            margin-top: 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            background-color: #475467;
            
        }
        .Registerbtn{
            background-color: #BEC0CD;
            border: none;
            color: black;
            width: 90px;
            margin: 0;
            margin-left: 12%;
            text-align: right;
        }
        .showText{
            margin-top: 20px;
            display: flex;
            justify-content: center;
            p{
                text-align: center;
            }
        }
    }
}


</style>
