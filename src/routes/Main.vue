<template>
    <div class="uk-height-1-1">
    </div>
</template>

<script>
    export default {
        name: 'Main',
        components: {
        },
        methods: {
            goHome: function(event) {
                gtag('event', 'click', {
                    'event_category': '랜딩페이지',
                    'event_label': 'goto Beta',
                });
            },
            goRegister: function(event) {
                gtag('event', 'click', {
                    'event_category': '랜딩페이지',
                    'event_label': 'goto Register',
                });
            }
        }
    }

</script>

<style>
</style>
