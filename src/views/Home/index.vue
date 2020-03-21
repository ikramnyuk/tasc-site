<template>
    <main class="main-wrapper">
        <section class="section-1">
            <div class="intro intro-mb">
                <img class="logo" src="@/assets/img/logo.png" alt="logo">

                <h1>{{translate('home', 'section1', 'label')}}</h1>
                <h2>{{translate('home', 'section1', 'intro')}} <br/> {{translate('home', 'section1', 'subIntro')}}</h2>
            </div>
        </section>

        <section class="section-2 custom-container">
            <h3 class="section-title centered">{{translate('home', 'section2', 'label')}}</h3>

            <div class="steps">
               
                <div class="steps-wrap">
                    <div class="arrow">
                        
                    </div>

                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase1')}}</span>
                            <div class="step-content">
                                {{translate('home', 'section2', 'case1')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case1Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase2')}}</span>
                            <div class="step-content">
                                {{translate('home', 'section2', 'case2')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case2Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase3')}}</span>
                            <div class="step-content">
                                {{translate('home', 'section2', 'case3')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case3Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase4')}}</span>
                            <div class="step-content">
                                {{translate('home', 'section2', 'case4')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case4Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section section-3 bg-section" id="monitoring"> 
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section3', 'label')}}</h3>

                <div class="description">
                    <p>{{translate('home', 'section3', 'list1label')}}</p>
                    <a href="tender-it.com"> {{translate('home', 'section3', 'link1')}}</a>
                    <p class="link-description">{{translate('home', 'section3', 'list2Label')}}</p>
                </div>
                
                <div class="section-3-content">
                    <div class="left">

                        <div class="list-wrapper">
                            <ul>
                                <li>{{translate('home', 'section3', 'list1_1')}}</li>
                                <li>{{translate('home', 'section3', 'list1_2')}}</li>
                                <li>{{translate('home', 'section3', 'list1_3')}}</li>
                                <li>{{translate('home', 'section3', 'list1_4')}}</li>
                                <li>{{translate('home', 'section3', 'list1_5')}}</li>
                                <li>{{translate('home', 'section3', 'list1_6')}}</li>
                            </ul>
                        </div>

                        <p class="description">{{translate('home', 'section3', 'list2Sublabel')}}</p>

                        <div class="list-wrapper">
                            <ul>
                                <li>{{translate('home', 'section3', 'list2_1')}}</li>
                                <li>{{translate('home', 'section3', 'list2_2')}}</li>
                                <li>{{translate('home', 'section3', 'list2_3')}}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="right">
                        <div class="img-wrap">
                            <div class="img-overlay">
                                <img src="@/assets/img/search.jpg" alt="tender process">
                            </div>
                        </div>

                        <div class="more-wrap">
                            <a href="https://www.tender-it.com/" class="more"><span>{{translate('home', 'section3', 'link2')}}</span><i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="main-section shape-toright" id="eligibility">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section4', 'label')}}</h3>
                <p class="description">{{translate('home', 'section4', 'subLabel')}}</p>

                <div class="info-box">
                    <div class="img-wrap colorable">
                        <div class="img-overlay">
                            <img src="@/assets/img/image-1.jpg" alt="tender process">
                        </div>
                    </div>
                    
                    <div class="list-wrapper right">
                        <div class="list-title">{{translate('home', 'section4', 'listLabel')}}</div>
                        <ul>
                            <li>{{translate('home', 'section4', 'list_1')}}</li>
                            <li>{{translate('home', 'section4', 'list_2')}}</li>
                            <li>{{translate('home', 'section4', 'list_3')}}</li>
                            <li>{{translate('home', 'section4', 'list_4')}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section bg-section" id="offer">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section5', 'label')}}</h3>
                <p class="description">{{translate('home', 'section5', 'subLabel')}}</p>
                
                <div class="info-box">
                    <div class="list-wrapper left">
                        <div class="list-title">{{translate('home', 'section5', 'listLabel')}}</div>
                        <ul>
                            <li>{{translate('home', 'section5', 'list_1')}}</li>
                            <li>{{translate('home', 'section5', 'list_2')}}</li>
                            <li>{{translate('home', 'section5', 'list_3')}}</li>
                            <li>{{translate('home', 'section5', 'list_4')}}</li>
                            <li>{{translate('home', 'section5', 'list_5')}}</li>
                            <li>{{translate('home', 'section5', 'list_6')}}</li>
                            <li>{{translate('home', 'section5', 'list_7')}}</li>
                            <li>{{translate('home', 'section5', 'list_8')}}</li>
                            <li>{{translate('home', 'section5', 'list_9')}}</li>
                            <li>{{translate('home', 'section5', 'list_10')}}</li>
                            <li>{{translate('home', 'section5', 'list_11')}}</li>
                        </ul>
                    </div>

                    <div class="img-wrap colorable">
                        <div class="img-overlay">
                            <img src="@/assets/img/image-2.jpg" alt="tender process">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="main-section shape-toleft" id="partnership">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section6', 'label')}}</h3>
                <p class="description">{{translate('home', 'section6', 'subLabel')}}</p>

                <div class="info-box">
                    <div class="img-wrap colorable">
                        <div class="img-overlay">
                            <img src="@/assets/img/image-3.jpeg" alt="tender process">
                        </div>
                    </div>

                    <div class="list-wrapper right">
                        <div class="list-title">{{translate('home', 'section6', 'listLabel')}}</div>

                        <ul>
                            <li>{{translate('home', 'section6', 'list_1')}}</li>
                            <li>{{translate('home', 'section6', 'list_2')}}</li>
                            <li>{{translate('home', 'section6', 'list_3')}}</li>
                            <li>{{translate('home', 'section6', 'list_4')}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import './style.scss';
    import translate from "../../lang/translate";

    export default {
        name: "Home",
        mixins: [translate],

        components: {},
        
        data() {
            return {};
        },

        methods: {}
    };
</script>
