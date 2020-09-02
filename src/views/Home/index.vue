<template>
    <main class="main-wrapper" id="top-point">
        <section class="scroll-point section-1" id="intro">
            <div class="intro intro-mb">
                <div class="logo-container">
                    <img class="logo" src="@/assets/img/new-tender-it-logo.png" alt="logo">
                    <span>{{translate('home', 'section1', 'powered')}}</span>
                    <img class="logo" src="@/assets/img/logo.png" alt="logo">
                </div>

                <h1>{{translate('home', 'section1', 'label')}}</h1>
                <h2>{{translate('home', 'section1', 'intro')}} <br/> {{translate('home', 'section1', 'subIntro')}}</h2>
            </div>
        </section>

        <section class="section-2 custom-container-lg">
            <h3 class="section-title centered">{{translate('home', 'section2', 'label')}}</h3>

            <div class="steps">
                
                <div class="steps-wrap">
                    <div class="arrow">
                        
                    </div>

                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase1')}}</span>
                            <div class="step-content" v-if="casesVisible">
                                {{translate('home', 'section2', 'case1')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case1Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase2')}}</span>
                            <div class="step-content" v-if="casesVisible">
                                {{translate('home', 'section2', 'case2')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case2Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase3')}}</span>
                            <div class="step-content" v-if="casesVisible">
                                {{translate('home', 'section2', 'case3')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case3Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-label">
                            <span>{{translate('home', 'section2', 'preCase4')}}</span>
                            <div class="step-content" v-if="casesVisible">
                                {{translate('home', 'section2', 'case4')}} <br/> <span class="solid-text">{{translate('home', 'section2', 'case4Bold')}}</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <a href="#" class="download-boock">{{translate('home', 'section2', 'download')}}</a> -->
        </section>

        <section class="scroll-point main-section section-3 bg-section" id="monitoring"> 
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section3', 'label')}}</h3>

                <div class="description">
                    <p class="bold">
                        <span>{{translate('home', 'section3', 'list1label')}}</span>
                        <img src="@/assets/img/tender-it-logo.png" class="img-ml-5" alt="">
                    </p>
                    <!-- <a href="tender-it.com"> {{translate('home', 'section3', 'link1')}}</a> -->
                    <!-- <p class="link-description">{{translate('home', 'section3', 'list2Label')}}</p> -->
                </div>
                
                <div class="section-3-content">
                    <div class="left">

                        <div class="list-wrapper">
                            <div v-if="currentLang === 'Fr'" class="list-title">{{translate('home', 'section4', 'listLabel')}}</div>
                            <ul>
                                <li>{{translate('home', 'section3', 'list1_1')}}</li>
                                <li>{{translate('home', 'section3', 'list1_2')}}</li>
                                <li>{{translate('home', 'section3', 'list1_3')}}</li>
                                <li>{{translate('home', 'section3', 'list1_4')}}</li>
                                <li>{{translate('home', 'section3', 'list1_5')}}</li>
                                <li>{{translate('home', 'section3', 'list1_6')}}</li>
                            </ul>
                        </div>

                        <p class="description bold">
                            <img src="@/assets/img/tender-it-logo.png" class="img-mr-5" alt="">
                            <span>{{translate('home', 'section3', 'list2Sublabel')}}</span>
                        </p>
                        <p class="description bold pt-0 pb-20">
                            <span>{{translate('home', 'section3', 'list2Sublabel2part1')}}</span>
                            
                            <span><span>{{translate('home', 'section3', 'list2Sublabel2part2')}}</span></span>
                        </p>

                        <div class="list-wrapper">
                            <div class="list-title">{{translate('home', 'section4', 'listLabel')}}</div>
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
                                <img src="@/assets/img/search.png" alt="tender process">
                            </div>
                        </div>

                        <div class="more-wrap">
                            <a href="https://www.tender-it.com/" class="more"><img src="@/assets/img/tender-icon.png" alt="tender process"><span>{{translate('home', 'section3', 'link2')}}</span><i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="scroll-point main-section shape-toright" id="eligibility">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section4', 'label')}}</h3>
                <p class="description bold">{{translate('home', 'section4', 'subLabel')}}</p>

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

        <section class="scroll-point main-section bg-section" id="offer">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section5', 'label')}}</h3>
                <p class="description bold">{{translate('home', 'section5', 'subLabel')}}</p>
                
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
        
        <section class="scroll-point main-section shape-toleft" id="partnership">
            <div class="custom-container">
                <h3 class="section-title">{{translate('home', 'section6', 'label')}}</h3>
                <p class="description bold">{{translate('home', 'section6', 'subLabel1')}}</p>
                <p class="description">{{translate('home', 'section6', 'subLabel2')}}</p>

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

        <!-- About -->

        <section class="scroll-point main-section bg-section" id="about">
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
                        <li><span>{{translate('about', 'section3', 'case1')}}</span></li>
                        <li><span>{{translate('about', 'section3', 'case2')}}</span></li>
                        <li><span>{{translate('about', 'section3', 'case4')}}</span></li>
                        <li><span>{{translate('about', 'section3', 'case5')}}</span></li>
                        <li><span>{{translate('about', 'section3', 'case3')}}</span></li>
                        <li><span>{{translate('about', 'section3', 'case6')}}</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title centered">{{translate('about', 'section4', 'label')}}</h3>

                <carousel class="testimonials" :autoplay="true" :perPageCustom="[[320, 1], [1024, 1]]" :scrollPerPage="true">
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

        <!-- Contact -->

        <div class="scroll-point map-wrapp" id="contact">
            <LMap :zoom="zoom" :center="center" :options="options" class="map">
                <LTileLayer :url="url" :attribution="attribution"/>
                <LMarker :lat-lng="center" :icon="icon"></LMarker>
            </LMap>
        </div>

        <div class="main-section bg-section contact-wrapp" id="bottom-point">
            <div class="contact-container">
                <h3 class="section-title">{{translate('contact', 'section1', 'label')}}</h3>

                <div class="contact-form">
                    <form>
                        <v-text-field v-model="firstName" :label="translate('contact', 'section1', 'form1')"></v-text-field>
                        <v-text-field v-model="lastName" :label="translate('contact', 'section1', 'form2')"></v-text-field>
                        <v-text-field v-model="email" :label="translate('contact', 'section1', 'form3')"></v-text-field>
                        <v-select v-model="topic" :items="translate('contact', 'section1', 'topics')" :label="translate('contact', 'section1', 'form4')"></v-select>
                        <v-textarea v-model="message" :label="translate('contact', 'section1', 'form5')"></v-textarea>
                        <v-btn color="#0190e3" @click="submitForm()">{{translate('contact', 'section1', 'formBtn')}}</v-btn>
                    </form>
                    
                    <div class="contact-info">
                        <div class="call-block">
                            <div class="header">
                                {{translate('contact', 'section1', 'contactLabel')}} <a href="tel:+32 496 127 327">+32 496 127 327</a>
                            </div>
                            
                            <div class="text">
                                {{translate('contact', 'section1', 'contactSubLabel')}}
                            </div>
                        </div>

                        <div class="contact-block">
                            <div class="header">
                                {{translate('contact', 'section1', 'addressLabel')}}
                            </div>
                            <div class="label">{{translate('contact', 'section1', 'addresssublabel')}}</div>
                            <div class="label">{{translate('contact', 'section1', 'addresssublabel2')}}</div>
                            <div class="contac-info">
                                {{translate('contact', 'section1', 'adress1')}} <br/>
                                {{translate('contact', 'section1', 'adress2')}} <br/>
                                <a :href="'mailto:' + translate('contact', 'section1', 'adress3')">{{translate('contact', 'section1', 'adress3')}}</a> <br/>
                                <a :href="'mailto:' + translate('contact', 'section1', 'adress31')">{{translate('contact', 'section1', 'adress31')}}</a> <br/>
                                {{translate('contact', 'section1', 'adress4')}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-snackbar :timeout="5000" color="success" top bottom v-model="snackbar">{{translate('common', 'headerAndFooter', 'success')}}</v-snackbar>
    </main>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    import { latLng, icon } from "leaflet";
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';
    import iconUrl from "../../assets/img/logo-marker.svg";

    import { sendEmail } from "../../api/common";

    import './main.scss';
    import './about.scss';
    import './contact.scss';
    import translate from "../../lang/translate";

    export default {
        name: "Home",
        mixins: [translate],
        
        props: ['lang'],

        components: {Carousel, Slide, LMap, LTileLayer, LMarker},
        
        watch: { 
            lang: function(newVal) {

                this.currentLang = newVal;
                console.log(newVal + ' home');
            }
        },

        data() {
            return {
                center: latLng(50.830593, 4.404381),
                zoom: 16,
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                icon: icon({
                    iconUrl: iconUrl,
                    iconSize: [40, 40],
                    iconAnchor: [16, 37]
                }),
                firstName: "",
                lastName: "",
                email: "",
                topic: "",
                message: "",
                snackbar: false,
                options: {
                    scrollWheelZoom: false
                },
                casesVisible: false,
                currentLang: ''
            };
        },

        beforeMount(){
            this.currentLang = localStorage.lang;
            
            if(window.innerWidth > 1023){
                window.addEventListener("scroll", () => {
                    if(window.scrollY >= 500){
                        this.casesVisible = true;
                    }
                });

                if(window.scrollY >= 500){
                    this.casesVisible = true;
                }
            }
        },

        methods: {
            submitForm(){
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    topic: this.topic,
                    message: this.message
                }

                return new Promise((resolve, reject) => {
                    sendEmail(data).then((response) => {
                        this.snackbar = true;

                        this.snackbar = true;
                        this.firstName = "";
                        this.lastName = "";
                        this.email = "";
                        this.topic = "";
                        this.message = "";

                        console.log(response);
                    }).catch(error => {
                        console.log(error);

                        reject(error);
                    });
                });
            }
        }
    };
</script>
