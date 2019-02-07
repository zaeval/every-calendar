<template>
    <div class=" uk-height-1-1 wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container">
        <img srcset="https://picsum.photos/640/700/?image=482 640w,
		             https://picsum.photos/960/700/?image=482 960w,
		             https://picsum.photos/1200/900/?image=482 1200w,
		             https://picsum.photos/2000/1000/?image=482 2000w"
             src="https://picsum.photos/2000/1000/?image=482" alt="" uk-cover
        >
        <GlobalNavigation :modal="modal"></GlobalNavigation>
        <AddFriendModal :modal="modal"></AddFriendModal>
        <div class="uk-flex uk-flex-wrap">
            <div class="uk-width-4-5 uk-height-1-1  ">

                <div id='calendar' class="uk-card uk-card-default uk-position-z-index uk-padding uk-card-hover">
                    <div class="uk-position-top-right uk-padding-small">
                        <div class="uk-flex">
                            <div class="uk-position-relative uk-display-inline-block switch-text-wrapper">
                                <span class="uk-transition-fade uk-position-absolute" :class="{'uk-opacity-1':sw}">비는시간</span>
                                <span class="uk-transition-fade uk-position-absolute" :class="{'uk-opacity-1':!sw}">겹친시간</span>
                            </div>
                        </div>
                        <label class="uk-switch uk-position-relative" @click="clickSwitch" for="default-1">
                            <input type="checkbox" id="default-1">
                            <div class="uk-switch-slider"></div>
                        </label>
                    </div>
                </div>
            </div>
            <div class="uk-width-1-5 uk-height-1-1 uk-position-center-right uk-position-fixed uk-position-z-index ">
                <div class=" uk-width-4-5 uk-margin uk-card uk-card-hover uk-card-default uk-card-body uk-margin uk-position-center">
                    <ul multiple uk-accordion>
                        <li class="uk-open">
                            <a class="uk-accordion-title" href="">반영</a>
                            <div class="uk-accordion-content">
                                <ul class="uk-nav uk-nav-default" ref="active-list">
                                    <li v-for="(ai,index) in activeList"><a @click="clickItem" active=true>{{ ai }}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="uk-open">
                            <a class="uk-accordion-title" href="">미반영</a>
                            <div class="uk-accordion-content">
                                <ul class="uk-nav uk-nav-default" ref="not-active-list">
                                    <li v-for="(ai,index) in notActiveList"><a @click="clickItem" active=false>{{ ai
                                        }}</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'expose-loader?$!expose-loader?jQuery!jquery'
    import 'moment'
    import 'fullcalendar'
    import 'fullcalendar/dist/fullcalendar.css'
    import GlobalNavigation from "../components/GlobalNavigation";
    import AddFriendModal from "../components/AddFriendModal";

    export default {
        name: 'Main',
        components: {AddFriendModal, GlobalNavigation},
        data: function () {
            return {
                modal: 'add-friend',
                activeList: ['active'],
                notActiveList: ['non-active'],
                sw: false,
            };
        },
        methods: {
            clickItem: function (event) {
                if (event.target.getAttribute('active') == 'true') {
                    this.notActiveList.push(this.activeList.splice(this.activeList.indexOf(event.target.innerText), 1)[0]);
                    this.notActiveList.sort();
                } else if (event.target.getAttribute('active') == 'false') {
                    this.activeList.push(this.notActiveList.splice(this.notActiveList.indexOf(event.target.innerText), 1)[0]);
                    this.activeList.sort();
                }
            },
            clickSwitch: function (event) {
                console.log(event);
                this.sw = event.target.checked;
            }

        },
        mounted: function () {
            $(function () {
                $('#calendar').fullCalendar({
                    defaultView: 'agendaWeek',
                    locale: 'ko',
                    header: {
                        left: '',
                        center: 'title',
                        right: '',
                    }, views: {
                        week: { // name of view
                            titleFormat: 'YYYY년 MM월 dddd',

                        }
                    },
                    events: [{
                        title: 'My Event',
                        start: '2010-01-01T14:30:00',
                        allDay: false
                    }],

                    slotLabelFormat: [
                        'a h:mm'        // lower level of text
                    ],
                    slotLabelInterval: '00:30:00', viewSubSlotLabel: true,
                    minTime: "08:00:00",
                    maxTime: "22:00:00",
                    allDaySlot: false,
                    columnHeaderFormat: 'ddd'

                })
            });
        },
    }

</script>

<style>
    #calendar {
        max-width: 900px;
        margin: 40px auto;
    }

    .wrap::before {
        position: absolute;
        height: 100%;
        width: 100vw;
        content: '';
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .lead {
        font-size: 1.175em;
        font-weight: 300;
    }

    .uk-logo {
        height: 28px !important;
    }

    .fc-time-grid-container {
        overflow: visible !important;
        height: auto !important;
    }

    .uk-switch {
        position: relative;
        display: inline-block;
        height: 34px;
        width: 60px;
    }

    /* Hide default HTML checkbox */
    .uk-switch input {
        display: none;
    }

    /* Slider */
    .uk-switch-slider {
        background-color: rgba(0, 0, 0, 0.22);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border-radius: 500px;
        bottom: 0;
        cursor: pointer;
        transition-property: background-color;
        transition-duration: .2s;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.07);
    }

    /* Switch pointer */
    .uk-switch-slider:before {
        content: '';
        background-color: #fff;
        position: absolute;
        width: 30px;
        height: 30px;
        left: 2px;
        bottom: 2px;
        border-radius: 50%;
        transition-property: transform, box-shadow;
        transition-duration: .2s;
    }

    /* Slider active color */
    input:checked + .uk-switch-slider {
        background-color: #39f !important;
    }

    /* Pointer active animation */
    input:checked + .uk-switch-slider:before {
        transform: translateX(26px);
    }

    /* Modifiers */
    .uk-switch-slider.uk-switch-on-off {
        background-color: #f0506e;
    }

    input:checked + .uk-switch-slider.uk-switch-on-off {
        background-color: #32d296 !important;
    }

    /* Style Modifier */
    .uk-switch-slider.uk-switch-big:before {
        transform: scale(1.2);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
    }

    .uk-switch-slider.uk-switch-small:before {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.22);
    }

    input:checked + .uk-switch-slider.uk-switch-big:before {
        transform: translateX(26px) scale(1.2);
    }

    /* Inverse Modifier - affects only default */
    .uk-light .uk-switch-slider:not(.uk-switch-on-off) {
        background-color: rgba(255, 255, 255, 0.22);
    }

    .uk-opacity-1 {
        opacity: 1 !important
    }
    .switch-text-wrapper{
        height: calc(1em + 10px);
        width: 70px;
    }
</style>
