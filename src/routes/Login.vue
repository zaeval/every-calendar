<template>
    <div class="login uk-height-1-1 uk-cover-container uk-background-secondary">
        <img srcset="https://picsum.photos/640/700/?image=1044 640w,
		             https://picsum.photos/960/700/?image=1044 960w,
		             https://picsum.photos/1200/900/?image=1044 1200w,
		             https://picsum.photos/2000/1000/?image=1044 2000w"
             sizes="100vw"
             src="https://picsum.photos/1200/900/?image=1044" alt="" data-uk-cover data-uk-img
        >

        <div class="uk-position-cover uk-overlay-primary"></div>

        <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-light uk-position-relative uk-position-z-index">
            <div class="uk-position-bottom-center uk-position-small uk-visible@m">
                <span class="uk-text-small uk-text-muted">© 2019 among - <a
                        href="https://github.com/zzseba78/Kick-Off">Created by zaeval</a> | Built with <a
                        href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span
                        data-uk-icon="uikit"></span></a> | support from kookmin Univ. Return</span>
            </div>
            <div class="uk-width-medium uk-padding-small" uk-scrollspy="cls: uk-animation-fade">
                <div class="uk-text-center uk-margin">
                    <img src="../assets/long-logo.png" alt="Logo">
                </div>
                <form ref="submitForm" @submit.prevent="login">
                    <fieldset class="uk-fieldset">
                        <div class="uk-margin">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                                <input class="uk-input uk-border-pill" required placeholder="Username" type="text"
                                       name="id">
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                                <input class="uk-input uk-border-pill" required placeholder="Password" type="password"
                                       name="password">
                            </div>
                        </div>

                        <div class="uk-margin uk-width-1-1">
                            <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">LOG
                                IN & SIGN UP
                            </button>

                        </div>
                    </fieldset>
                </form>
                <div>
                    <div class="uk-margin-small-top" id="recover" hidden>
                        <form action="login-dark.html">

                            <div class="uk-margin-small">
                                <div class="uk-inline uk-width-1-1">
                                    <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                                    <input class="uk-input uk-border-pill" placeholder="E-mail" required type="text">
                                </div>
                            </div>
                            <div class="uk-margin-small">
                                <button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">
                                    SEND PASSWORD
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Loading ref="loading"></Loading>
    </div>
</template>

<script>

    import Loading from "../components/Loading";
    import axios from "axios";
    import UIkit from "UIkit";

    export default {
        name: 'Login',
        components: {Loading},
        data: function () {
            return {
                errorMessage: '로그인이 유효하지않습니다.',

            };
        },
        methods: {
            login: function () {
                this.$refs.loading.show();
                var formData = new FormData(this.$refs.submitForm);
                var id = formData.get('id')
                var password= formData.get('password')
                this.$store.dispatch('LOGIN', {
                    id,
                    password
                }).then(()=>this.$router.replace({name:'root'}))
                    .catch((error) => {
                        if (error.response.status == 500) {
                            UIkit.notification('서버에러', 'danger')
                        } else {
                            UIkit.notification(error.response.data.detail, 'danger')
                        }
                        this.$refs.loading.hide();
                    })
            }
        }
    }
</script>

<style>
</style>
