<template>
    <main class="main-wrapper about">
        <section class="section-1">
            <div class="intro">
                <h1>{{translate('about', 'section1', 'label')}}</h1>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title centered">{{translate('about', 'section2', 'label')}}</h3>

                <div class="cases">
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-lock</v-icon></div>
                        <p>{{translate('about', 'section2', 'case1')}}</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-tasks</v-icon></div>
                        <p>{{translate('about', 'section2', 'case2')}}</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-search</v-icon></div>
                        <p>{{translate('about', 'section2', 'case3')}}</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-handshake</v-icon></div>
                        <p>{{translate('about', 'section2', 'case4')}}</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-trophy</v-icon></div>
                        <p>{{translate('about', 'section2', 'case5')}} <br/>{{translate('about', 'section2', 'case5Sub')}}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section">
            <div class="custom-container">
                <h3 class="section-title centered">{{translate('about', 'section3', 'label')}}</h3>

                <div class="list-wrapper">
                    <ul class="strategy">
                        <div>
                            <li><span>{{translate('about', 'section3', 'case1')}}</span></li>
                            <li><span>{{translate('about', 'section3', 'case2')}}</span></li>
                            <li><span>{{translate('about', 'section3', 'case4')}}</span></li>
                            <li><span>{{translate('about', 'section3', 'case5')}}</span></li>
                        </div>
                        <div>
                            <li><span>{{translate('about', 'section3', 'case3')}}</span></li>
                            <li><span>{{translate('about', 'section3', 'case6')}}</span></li>
                            <li><span>{{translate('about', 'section3', 'case7')}}</span></li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title centered">{{translate('about', 'section4', 'label')}}</h3>

                <carousel class="testimonials" :perPageCustom="[[320, 1], [1024, 2]]">
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">{{translate('about', 'section4', 'case1')}}</div>
                            <div class="slide-author">{{translate('about', 'section4', 'case1Sub')}}</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">{{translate('about', 'section4', 'case2')}}</div>
                            <div class="slide-author">{{translate('about', 'section4', 'case2Sub')}}</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">{{translate('about', 'section4', 'case3')}}</div>
                            <div class="slide-author">{{translate('about', 'section4', 'case3Sub')}}</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">{{translate('about', 'section4', 'case4')}}</div>
                            <div class="slide-author">{{translate('about', 'section4', 'case4Sub')}}</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">{{translate('about', 'section4', 'case5')}}</div>
                            <div class="slide-author">{{translate('about', 'section4', 'case5Sub')}}</div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>

    </main>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    import './style.scss';
    import translate from "../../lang/translate";
    
    export default {
        name: "About",
        mixins: [translate],
        
        components: {Carousel, Slide},

        data() {
            return {
                
            };
        },

        methods: {}
    };
</script>
