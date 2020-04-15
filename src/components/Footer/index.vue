<template>
    <div class="gradiented-wrapp">
        <div class="custom-container">
            <footer class="main-footer">
                <div class="logo-col">
                    <a href="#" class="logo">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>
                </div>
                
                <div class="custom-row">
                    <div class="custom-col">
                        <h3>{{translate('common', 'headerAndFooter', 'footerLabel1')}}</h3>

                        <ul>
                            <li><a href="#monitoring" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link1')}}</a></li>
                            <li><a href="#eligibility" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link2')}}</a></li>
                            <li><a href="#offer" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link3')}}</a></li>
                            <li><a href="#partnership" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link4')}}</a></li>
                            <li><a href="#about" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link5')}}</a></li>
                            <li><a href="#contact" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">{{translate('common', 'headerAndFooter', 'link6')}}</a></li>
                            <li><router-link to="/privacy">{{translate('common', 'headerAndFooter', 'privacy')}}</router-link></li>
                        </ul>
                    </div>
                    <div class="custom-col">
                        <h3>{{translate('common', 'headerAndFooter', 'footerLabel2')}}</h3>

                        <ul>
                            <li><a href="https://www.linkedin.com/in/beno%C3%AEt-conti-808967/" target="blank">
                                <i class="fab fa-linkedin"></i>
                                <span>Linkedin</span>
                            </a></li>
                            <li><a href="https://twitter.com/BenotConti" target="blank">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="https://www.facebook.com/euro.tasc" target="blank">
                                <i class="fab fa-facebook"></i>
                                <span>Facebook</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="custom-col">
                        <h3 class="solid-text fz16">{{translate('contact', 'section1', 'addresssublabel')}}</h3>

                        <ul>
                            <li>{{translate('contact', 'section1', 'adress1')}}</li>
                            <li>{{translate('contact', 'section1', 'adress2')}}</li>
                            <li><a href="mailto:info@eurotasc.com">{{translate('contact', 'section1', 'adress3')}}</a></li>
                            <li>{{translate('contact', 'section1', 'adress4')}}</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import './style.scss';
    import translate from "../../lang/translate";

    export default {
        name: "Footer",
        mixins: [translate],

        components: {},
        
        data() {
            return {};
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            }
        }
    };
</script>
