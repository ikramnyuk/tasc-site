<template>
    <main class="main-wrapper">
        <div class="map-wrapp">
            <LMap :zoom="zoom" :center="center" class="map">
                <LTileLayer :url="url" :attribution="attribution"/>
                <LMarker :lat-lng="center" :icon="icon"></LMarker>
            </LMap>
        </div>

        <div class="main-section bg-section contact-wrapp">
            <div class="contact-container">
                <h3 class="section-title">{{translate('contact', 'section1', 'label')}}</h3>

                <div class="contact-form">
                    <form>
                        <v-text-field v-model="firstName" :label="translate('contact', 'section1', 'form1')"></v-text-field>
                        <v-text-field v-model="lastName" :label="translate('contact', 'section1', 'form2')"></v-text-field>
                        <v-text-field v-model="email" :label="translate('contact', 'section1', 'form3')"></v-text-field>
                        <v-select v-model="topic" :items="topicItems" :label="translate('contact', 'section1', 'form4')"></v-select>
                        <v-textarea v-model="message" :label="translate('contact', 'section1', 'form5')"></v-textarea>
                        <v-btn color="#0190e3" @click="submitForm()">{{translate('contact', 'section1', 'formBtn')}}</v-btn>
                    </form>
                    
                    <div class="contact-info">
                        <div class="call-block">
                            <div class="header">
                                {{translate('contact', 'section1', 'contactLabel')}} <a href="tel:+32 (0)496 127 327">+32(0)2 512 53 03</a>
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
                            <div class="contac-info">
                                {{translate('contact', 'section1', 'adress1')}} <br/>
                                {{translate('contact', 'section1', 'adress2')}} <br/>
                                {{translate('contact', 'section1', 'adress3')}} <br/>
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
    import { latLng, icon } from "leaflet";
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';

    import './style.scss';
    import translate from "../../lang/translate";
    
    import iconUrl from "../../assets/img/marker.svg";

    import { sendEmail } from "../../api/common";

    export default {
        name: "Contact",
        mixins: [translate],

        components: { LMap, LTileLayer, LMarker },
        
        data() {
            return {
                center: latLng(50.830593, 4.404381),
                zoom: 16,
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                icon: icon({
                    iconUrl: iconUrl,
                    iconSize: [45, 45],
                    iconAnchor: [16, 37]
                }),
                topicItems: ["Monitoring", "Eligibility", "Offer Building", "Tender Partnership"],
                firstName: "",
                lastName: "",
                email: "",
                topic: "",
                message: "",
                snackbar: false
            };
        },

        beforeCreate(){

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