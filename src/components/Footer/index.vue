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
                            <li><router-link class="d-none d-md-inline d-lg-inline" to="/#monitoring">{{translate('common', 'headerAndFooter', 'link1')}}</router-link></li>
                            <li><router-link class="d-none d-md-inline d-lg-inline" to="/#eligibility">{{translate('common', 'headerAndFooter', 'link2')}}</router-link></li>
                            <li><router-link class="d-none d-md-inline d-lg-inline" to="/#offer">{{translate('common', 'headerAndFooter', 'link3')}}</router-link></li>
                            <li><router-link class="d-none d-md-inline d-lg-inline" to="/#partnership">{{translate('common', 'headerAndFooter', 'link4')}}</router-link></li>
                            <li><router-link to="/about">{{translate('common', 'headerAndFooter', 'link5')}}</router-link></li>
                            <li><router-link to="/contact">{{translate('common', 'headerAndFooter', 'link6')}}</router-link></li>
                        </ul>
                    </div>
                    <div class="custom-col">
                        <h3>{{translate('common', 'headerAndFooter', 'footerLabel2')}}</h3>

                        <ul>
                            <li><a href="#">
                                <i class="fab fa-linkedin"></i>
                                <span>Linkedin</span>
                            </a></li>
                            <li><a href="#">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="#">
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
