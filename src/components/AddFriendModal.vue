<template>
    <div :id="modal" uk-modal class="uk-flex-top">
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <legend class="uk-legend">친구 추가하기</legend>
            <div class="uk-margin">
                <textarea class="uk-textarea uk-overflow-auto" rows="10" placeholder="추가할 에브리타임 아이디를 개행구분으로 입력하여주세요."></textarea>
            </div>
            <p class="uk-text-right">
                <button class="uk-button uk-button-default uk-modal-close" type="button">취소</button>
                <button class="uk-button uk-button-primary" type="button">전송</button>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddFriendModal",
        props: ['modal']
    }
</script>

<style scoped>

</style>