<template>
    <div class="gradiented-wrapp">
        <div class="custom-container">
            <header class="main-header container">
                <nav class="main-menu">
                    <a href="#" class="logo" @click="goTo('/')">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>

                    <a href="#" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link1')}}</a>
                    <a href="#" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link2')}}</a>
                    <a href="#" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link3')}}</a>
                    <a href="#" class="d-none d-md-inline d-lg-inline">{{translate('common', 'headerAndFooter', 'link4')}}</a>
                </nav>

                <div class="menu-right">
                    <nav class="d-none d-md-flex d-lg-flex">
                        <a href="#" @click="goTo('/about')">{{translate('common', 'headerAndFooter', 'link5')}}</a>
                        <a href="#" @click="goTo('/contact')">{{translate('common', 'headerAndFooter', 'link6')}}</a>
                    </nav>

                    <div class="lang-switch">
                        <v-select :items="langItems" v-model="selectedLang" @change="changeLang()" label=""></v-select>
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
                                    <a href="#">{{translate('common', 'headerAndFooter', 'link1')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a href="#">{{translate('common', 'headerAndFooter', 'link2')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                <a href="#">{{translate('common', 'headerAndFooter', 'link3')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a href="#">{{translate('common', 'headerAndFooter', 'link4')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a href="#" @click="goTo('/about')">{{translate('common', 'headerAndFooter', 'link5')}}</a>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <a href="#" @click="goTo('/contact')">{{translate('common', 'headerAndFooter', 'link6')}}</a>
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
        
        data() {
            return {
                langItems: ["Eng", "Fr"],
                selectedLang: "Eng"
            };
        },

        created(){
            this.selectedLang = localStorage.lang;
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            },

            changeLang(){
                localStorage.lang = this.selectedLang;
            }
        }
    };
</script>
