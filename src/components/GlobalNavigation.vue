<template>
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
        <nav class=" uk-light uk-navbar-container uk-position-z-index uk-navbar-transparent" uk-navbar>
            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li><a href="/"><img src="../assets/long-logo.png" class="uk-logo"/></a></li>
                    <li class="uk-active"><a href="/">홈</a></li>
                    <li>
                        <a :href="'#'+modal" uk-toggle>친구 추가하기</a>

                    </li>
                </ul>

            </div>
            <div class="uk-navbar-right">

                <ul class="uk-navbar-nav">
                    <li>
                        <a href="">{{ name }}님</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">

                                <li class="uk-nav-header"><strong>{{ name }}</strong>님 환영합니다.</li>
                                <li><a href="#">마이페이지</a></li>
                                <li class="uk-nav-divider"></li>
                                <li><a href="#">로그아웃</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "GlobalNavigation",
        props:['modal'],
        data: function(){
            return {
              name:'헬로월드',
            };
        }
    }
</script>

<style scoped>

</style>