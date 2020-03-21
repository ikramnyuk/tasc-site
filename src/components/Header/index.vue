<template>
    <div class="gradiented-wrapp">
        <div class="custom-container">
            <header class="main-header container">
                <nav class="main-menu">
                    <a href="#" class="logo" @click="goTo('/')">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>

                    <router-link class="d-none d-md-inline d-lg-inline" to="/#monitoring">{{translate('common', 'headerAndFooter', 'link1')}}</router-link>
                    <router-link class="d-none d-md-inline d-lg-inline" to="/#eligibility">{{translate('common', 'headerAndFooter', 'link2')}}</router-link>
                    <router-link class="d-none d-md-inline d-lg-inline" to="/#offer">{{translate('common', 'headerAndFooter', 'link3')}}</router-link>
                    <router-link class="d-none d-md-inline d-lg-inline" to="/#partnership">{{translate('common', 'headerAndFooter', 'link4')}}</router-link>
                </nav>

                <div class="menu-right">
                    <nav class="d-none d-md-flex d-lg-flex">
                        <router-link to="/about">{{translate('common', 'headerAndFooter', 'link5')}}</router-link>
                        <router-link to="/contact">{{translate('common', 'headerAndFooter', 'link6')}}</router-link>
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
                                    <router-link to="/#monitoring">{{translate('common', 'headerAndFooter', 'link1')}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/#eligibility">{{translate('common', 'headerAndFooter', 'link2')}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/#offer">{{translate('common', 'headerAndFooter', 'link3')}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/#partnership">{{translate('common', 'headerAndFooter', 'link4')}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/about">{{translate('common', 'headerAndFooter', 'link5')}}</router-link>
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    <router-link to="/contact">{{translate('common', 'headerAndFooter', 'link6')}}</router-link>
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
                langItems: ["Eng", "Fr"],
                selectedLang: "Eng"
            };
        },

        created(){
            this.selectedLang = localStorage.lang || "Eng";
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            },

            changeLang(){
                localStorage.lang = this.selectedLang;
                this.$parent.langChanged()
            }
        }
    };
</script>
