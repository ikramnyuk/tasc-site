<template>
    <div class="gradiented-wrapp fixed-header">
        <div class="custom-container">
            <header class="main-header container">
                <nav class="main-menu">
                   <a href="#intro" class="logo" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>
                    <a href="#monitoring" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link1')}}</a>
                    <a href="#eligibility" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link2')}}</a>
                    <a href="#offer" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link3')}}</a>
                    <a href="#partnership" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link4')}}</a>
                    <a href="#about" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link5')}}</a>
                    <a href="#contact" v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link6')}}</a>
                </nav>

                <div class="menu-right">

                    <div class="lang-switch">
                        <v-select :items="langItems" item-text="label" item-value="value" v-model="selectedLang" @change="changeLang()" label=""></v-select>
                    </div>

                    <v-menu bottom origin="center center" transition="scale-transition" class="mobile-menu">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark v-on="on" class="d-sm-inline-flex d-xs-inline-flex d-md-none mobile-menu-btn">
                                <v-icon>fa-bars</v-icon>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#monitoring">{{translate('common', 'headerAndFooter', 'link1')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#eligibility">{{translate('common', 'headerAndFooter', 'link2')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#offer">{{translate('common', 'headerAndFooter', 'link3')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#partnership">{{translate('common', 'headerAndFooter', 'link4')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#about">{{translate('common', 'headerAndFooter', 'link5')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a v-smooth-scroll="{ duration: 500, offset: -70, updateHistory: false}" href="#contact">{{translate('common', 'headerAndFooter', 'link6')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    import './style.scss';
    import translate from "../../lang/translate";
    
    export default {
        name: "Header",
        mixins: [translate],

        components: {},
        props: [ 'langChanged' ],

        data() {
            return {
                langItems: [{label: 'English', value: 'Eng'}, {label: 'Français', value: 'Fr'}],
                selectedLang: localStorage.lang || "Eng",
            };
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            },

            changeLang(){
                localStorage.lang = this.selectedLang;
                this.$parent.langChanged(this.selectedLang)
            }
        }
    };
</script>
