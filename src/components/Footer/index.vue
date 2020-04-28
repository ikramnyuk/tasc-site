<template>
    <div class="gradiented-wrapp" :key="currentLang">
        <a v-if="scrolled" @click="scrollTo('top')" class="pagenav to-top">
            <i class="fas fa-chevron-up"></i>
        </a>

        <a v-if="scrolled" @click="scrollTo('bottom')" class="pagenav to-bottom">
            <i class="fas fa-chevron-down"></i>
        </a>

        <div class="scroll-point custom-container">
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
        
        props: ['lang'],

        watch: { 
            lang: function(newVal) {
                this.currentLang = newVal;
                console.log(newVal + ' footer');
            }
        },

        components: {},
        
        data() {
            return {
                scrolled: false,
                currentLang: '',
                scrollPoints: [],
                sections: []
            };
        },

        created(){
            let self = this;

            window.addEventListener("scroll", function() {
                var top = this.scrollY;

                if(top >= 400){
                    self.scrolled = true;
                }else{
                    self.scrolled = false;
                }
            });
        },

        mounted(){
            
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            },

            scrollTo(direction){
                let currentScroll = window.scrollY,
                    sections = document.querySelectorAll('.scroll-point'),
                    scrollArr = [];
                
                for(let item of sections){
                    scrollArr.push(item.offsetTop);    
                }
                
                this.scrollPoints = scrollArr;
                this.sections = sections;

                if(direction == 'top'){
                    for(let i = 0; i < this.scrollPoints.length; i++) {
                        console.log('step ' + i + ': ' + this.scrollPoints[i]);
                        console.log('current: ' + currentScroll);
                        if(this.scrollPoints[i] >= currentScroll){
                            this.smoothScroll(i - 1);
                            break;
                        }
                    }
                }
            
                if(direction == 'bottom'){
                    for(let i = 0; i < this.scrollPoints.length; i++) {
                        console.log('step ' + i + ': ' + this.scrollPoints[i]);
                        console.log('current: ' + currentScroll);
                        if(this.scrollPoints[i] == currentScroll){
                            this.smoothScroll(i + 1);
                            break;
                        }

                        if(this.scrollPoints[i] > currentScroll){
                            this.smoothScroll(i);
                            break;
                        }
                    }
                }
            },

            smoothScroll(position){
                console.log(position, this.sections[position]);
                this.$scrollTo(this.sections[position])
            }
        }
    };
</script>
