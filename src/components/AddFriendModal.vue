<template>
    <div :id="modal" uk-modal class="uk-flex-top">
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <legend class="uk-legend">친구 추가하기</legend>
            <div class="uk-margin">
                <textarea class="uk-textarea uk-overflow-auto" rows="10" placeholder="추가할 에브리타임 아이디를 개행구분으로 입력하여주세요."
                          ref="friends"></textarea>
            </div>
            <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">취소</button>
                <button class="uk-button uk-button-primary" type="button" @click="submit">전송</button>
            </p>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import UIkit from "UIkit";

    export default {
        name: "AddFriendModal",
        props: ['modal'],
        methods: {
            submit: function () {
                var friends = this.$refs.friends.value.split('\n');
                for(var fi = 0;fi<friends.length;++fi) {
                    console.log(friends[fi])
                    axios.post('/restful/sendrequest/', {'friend_id':friends[fi]}).then(
                        response => {
                            UIkit.notification(response.data.detail);
                        }
                    ).catch(
                        error => {
                            UIkit.notification("친구요청 실패", danger);
                        }
                    )
                }
            }
        }
    }
</script>

<style scoped>

</style>