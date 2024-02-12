<script>
    import { RouterLink,RouterView} from 'vue-router';

    export default{
        components:{
        RouterLink,
        RouterView
    }
}
</script>

<template>
    <div class="body">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="header">
            <div class="square"></div>
            <div class="d-flex TopRight">
                <div class="hyperlink ">
                    <RouterLink to="/">会社案内</RouterLink>
                    <span>|</span>
                    <a href="">店舗．アクセス</a>
                </div>
                <div class="phoneNumber">
                    <i class="fa-solid fa-phone" ></i>
                    <span>010-123456789</span>
                </div>
                <div class="headerLink">
                    <div class="d-flex">
                        <RouterLink to="/LogInPage">ログイン</RouterLink>
                        <p>｜</p>
                        <RouterLink to="/Ask">お問い合わせ</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <RouterLink to="//Text">Test</RouterLink> -->
                    
</template>

<style lang="scss" scoped>
.body{
    height: 100%;
    margin: 0;
    background-color: white;
}

a{
    font-weight: bold;
    text-decoration: none;
    color: white;
}


.header{
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;

    .square{
        background-color: #475467;
        height: 70px;
        width: 70px;
        margin-left: 6%;
    }
    .hyperlink{
        display: flex;
        justify-content: center;
        align-items: end;
        margin-left: 200px;
        a{
            color: black;
        }
        }
    .phoneNumber{
        display: flex;
        justify-content: center;
        align-items: end;
        margin-left: 400px;
    }
    .headerLink{
        border-radius: 5px;
        background-color: #475467;
        height: 25px;
        margin-left: 10px;
        p{
            color: white;
        }

    }
    span{
        margin: 0 10px;
    }
    
}
</style>